import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const baseURL = "http://en.wikipedia.org/w/api.php";

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(baseURL, {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term != "") {
      search();
    } else {
      setResults([]);
    }
  }, [term]);

  const list = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{list}</div>
    </div>
  );
};

export default Search;
