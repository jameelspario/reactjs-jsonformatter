import React, { useState } from 'react'
import Controll from './Controll'
import TextareaComponent from './TextareaComponent'
import DynamicTabs from './DynamicTabs'

const JsonFormatter = () => {

    const [text, setText] = useState("")
    const [formattedData, setFormattedData] = useState();
    const [index, setIndex] = useState(0)
    const [status, setStatus] = useState(0)
    const [hasStringified, setHasStringified] = useState(false);
    const [isValidJSON, setIsValidJSON] = useState(true);

    //{tab:"", content:"", state:1}
    const datas = []

    const handleTabChange = (tabIndex) => {
        console.log(`Tab changed to index ${tabIndex}`);
        // Add your logic here

    };


    const removeTab = (val) => {
        console.log(`removeTab ${val}`);
        // const newList = this.state.newList.filter((item) => item.id !== id);
        // this.setState({ newList });

    }

    const storeData = e => {
        let value = e.target.value;
        if (value && isJSON(value)) {
            setIsValidJSON(true);
            setText(JSON.parse(value));
        } else {
            setText();
            setFormattedData();
            setHasStringified(false);
            setIsValidJSON(false);
        }
    };

    const beautifyJSON = () => {
        console.log(`format ${setText}`);
        if (!isValidJSON) {
            alert('Invalid JSON - Please paste the valid JSON');
            return
        }

        if (text) {
            let formatData = JSON.stringify(text, null, 2);
            setFormattedData(formatData);
            setHasStringified(false);
        }
    };

    const minifyJSON = () => {
        if (!isValidJSON) {
            alert('Invalid JSON - Please paste the valid JSON');
        }
        if (!hasStringified) {
            if (formattedData) {
                let formatData = JSON.stringify(JSON.parse(formattedData));
                setFormattedData(formatData);
            } else if (text) {
                let formatData = JSON.stringify(text);
                setFormattedData(formatData);
            }
            setHasStringified(false);
        } else {
            if (formattedData) {
                let formatData = formattedData.replace(/\\/g, '');
                formatData = formatData.substring(1, formatData.length - 1);
                setFormattedData(formatData);
            } else if (text) {
                let formatData = text.replace(/\\/g, '');
                formatData = formatData.substring(1, text.length - 1);
                setFormattedData(formatData);
            }
            setHasStringified(false);
        }
    };

    const stringifyJSON = () => {
        if (!isValidJSON) {
          alert('Invalid JSON - Please paste the valid JSON');
        }
        if (!hasStringified) {
          if (formattedData) {
            let formatData = JSON.stringify(JSON.parse(formattedData));
            formatData = formatData
              .replace(/\\/g, '\\\\')
              .replace(/\u0008/g, '\\b')
              .replace(/\t/g, '\\t')
              .replace(/\n/g, '\\n')
              .replace(/\f/g, '\\f')
              .replace(/\r/g, '\\r')
              .replace(/'/g, "\\'")
              .replace(/"/g, '\\"');
            setFormattedData(`"${formatData}"`);
          } else if (text) {
            let formatData = JSON.stringify(text);
            formatData = formatData
              .replace(/\\/g, '\\\\')
              .replace(/\u0008/g, '\\b')
              .replace(/\t/g, '\\t')
              .replace(/\n/g, '\\n')
              .replace(/\f/g, '\\f')
              .replace(/\r/g, '\\r')
              .replace(/'/g, "\\'")
              .replace(/"/g, '\\"');
            setFormattedData(`"${formatData}"`);
          }
          setHasStringified(true);
        }
      };


    const isJSON = str => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };

    return (
        <div>
            <DynamicTabs onTabChange={handleTabChange} remove={removeTab} />
            <Controll
                format={beautifyJSON}
                minify={minifyJSON}
                stringify={stringifyJSON}
            />
            <TextareaComponent
                value={formattedData}
                onChange={storeData}
            />
        </div>
    )
}

export default JsonFormatter