// App.js
import './App.css';
import img from '../images/EID4.jpeg'
import React from 'react';
import html2canvas from 'html2canvas'

function App() {
    const [text, setText] = React.useState("")

    function handleText(event) {
        const newText = event.target.value
        setText(newText)
    }

    const node = document.getElementById('image-download')

    function downloadImage() {
        html2canvas(node).then((canvas) => {
            const base64image = canvas.toDataURL("image/png");
            var anchor = document.createElement('a');
            anchor.setAttribute("href", base64image);
            anchor.setAttribute('download', 'my-image.png');
            anchor.click();
            anchor.remove();
        }).catch(() => console.log("Error line #26 in App.js"))
    }

    return (
        <div className="container">
          
                <div className="card">
                    <p className="heading">اصنع بطاقة تهنئة ريتشي الخاصة بك وشاركها مع فريق عملك ومع من تحب </p>
                    <div className="card-image" id="image-download">
                        <img src={img} alt="" className="image" />
                        <h1 className="image-text">{text}</h1>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="اكتب اسمك هنا" onChange={handleText} value={text} required />
                    </div>
                    <div className="action">
                        <button className="action-button" onClick={downloadImage}>تحميل</button>
                    </div>
                </div>
            
            <footer className="footer">
                <p>© IT Department 2025 ✨</p>
            </footer>
        </div>
    );
}

export default App;
