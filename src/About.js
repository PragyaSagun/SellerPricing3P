import React from "react";

class About extends React.Component{
    upload(e)
    {
        console.warn(e.target.files)
        const files = e.target.files[0].name
        console.log(files)

        const reader = new FileReader()
        reader.onload = function () {
            alert(e.target.files[0].name);
            const data = reader.result
            console.log(data)

            console.log(typeof (data));
            console.log(data)

            const csvToJson = (string, headers, quoteChar = '"', delimiter = ',') => {
                const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, 'gs');
                const match = string => [...string.matchAll(regex)].map(match => match[2])
                    .filter((_, i, a) => i < a.length - 1); // cut off blank match at end

                const lines = data.split('\n');
                const heads = headers || match(lines.splice(0, 1)[0]);

                return lines.map(line => match(line).reduce((acc, cur, i) => ({
                    ...acc,
                    [heads[i] || `extra_${i}`]: (cur.length > 0) ? (Number(cur) || cur) : null
                }), {}));
            }
            document.getElementById('uploadbutton').onclick = function() {
                console.log("Button clicked")
            }
            console.log(csvToJson(data));
            var resultsent = csvToJson(data)
            var datasent = JSON.stringify(resultsent)
            console.log("Result sent:  " +datasent)

        }
        reader.readAsText(e.target.files[0])
    }

    render() {
        return(
            <div>
                <h1>Upload</h1>
                <input type="file" onChange={(e => this.upload(e))}/>
                <div className="buttonclass">
                    <button className="button" id="uploadbutton">Upload File</button>
                </div>
            </div>
        )
    }
}
export default About