import search from "../assets/search-icon.svg";
import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const nlp = winkNLP(model);
const its = nlp.its;

function SearchBar() {
  const [tempinput_value, setTempInputValue] = useState("");
  const [finalinput_value, setFinalInputValue] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (finalinput_value === "") {
      setKeywords([]);
      return;
    }
    {/* Process the input value to extract keywords */}
    const doc = nlp.readDoc(finalinput_value);
    let mainkeywords = doc.tokens()
      .filter((token) => {
        const pos = token.out(its.pos);
        return ['NOUN', 'ADJ', 'PROPN','VERB'].includes(pos);
      })
      .out(its.lemma);
    {/* Extracts the lemmas of the tokens that are nouns, adjectives, proper nouns, or verbs */}
    const customStopwords = ["want", "need", "use", "get", "have", "make", "find", "see", "create", "show", "add", "help", "look"];
    mainkeywords = mainkeywords.filter(word => word.length > 1 && /[a-z]/i.test(word) && !customStopwords.includes(word));

    {/*regex fallback implemented to include the alphanumeric words in the extracted array list*/}
    const regexFallback = finalinput_value.toLowerCase().match(/\b[\da-z\-]{2,}\b/g) || [];
    const extraKeywords = regexFallback.filter(w => /\d/.test(w) && /[a-z]/i.test(w));{/*filters the words which are only alphanumeric*/}
    const finalKeywords = [...new Set([...mainkeywords, ...extraKeywords])].map(k => k.toLowerCase());{/*set removes duplicates from the array*/}

    setKeywords(finalKeywords);
    console.log("Extracted keywords:", finalKeywords);

    {/* Fetch results from Supabase using the extracted keywords */}
    async function fetchResults(finalKeywords) {
      if (finalKeywords.length === 0) 
        return;

      const { data, error } = await supabase
          .from('tool_database')
          .select('*')
          .or(`category.ov.{${finalKeywords.join(',')}},seo_keywords.ov.{${finalKeywords.join(',')}}`);;

      if (error) {
        console.error("Supabase query error:", error);
      } else {
        console.log("Supabase search results:", data);
      }
      
      const final_result = data.map((tool) => {
        const matchedKeywords = finalKeywords.filter(k => tool.seo_keywords.includes(k)).length
        return {
          id:tool.primary_key,
          tool: tool.tool_name,
          matchedKeywords: matchedKeywords
        };
      });

      const sortedResults = final_result.filter(tool => tool.matchedKeywords > 0).sort((a, b) => b.matchedKeywords - a.matchedKeywords);
        setResults(sortedResults);
        console.log("Sorted results:", sortedResults);
      }
    fetchResults(finalKeywords);

  }, [finalinput_value]);

  return (
    <div className="p-[10x] flex flex-row items-center justify-start w-[878px] h-[35px] bg-white border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[10px] z-3 fixed">
      <img src={search} alt="search icon" className="w-[22px] h-[22px] ml-2" />  
      <textarea
        value={tempinput_value}
        onChange={(e) => {
          setTempInputValue(e.target.value);
          e.target.style.height = 'auto'; // Reset height
          e.target.style.height = `${e.target.scrollHeight}px`; // Set to new height
        }}
        placeholder="search from 200+ tools"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            setFinalInputValue(tempinput_value);
          }
        }}
        className="w-full overflow-hidden resize-none font-Outfit font-semibold text-black text-[15px] placeholder:text-[#737373] placeholder:font-medium placeholder:tracking-normal ml-2 mr-2 outline-none bg-transparent leading-tight"
        rows={1}
      />
    </div>
  );
}

export default SearchBar;
