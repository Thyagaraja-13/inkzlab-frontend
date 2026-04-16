import { useState } from "react";

export default function Customize() {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("");

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Customize Your Product</h1>

      <input type="file" onChange={handleImage} />
      <br /><br />

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>Preview</h2>

      {/* PRODUCT PREVIEW */}
      <div style={{
        position: "relative",
        width: "300px",
        margin: "auto"
      }}>

        {/* T-SHIRT IMAGE */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
          alt="tshirt"
          style={{ width: "100%" }}
        />

        {/* USER IMAGE */}
        {image && (
          <img
            src={image}
            alt="design"
            style={{
              position: "absolute",
              top: "90px",
              left: "75px",
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "5px"
            }}
          />
        )}

        {/* TEXT */}
        <p style={{
          position: "absolute",
          top: "250px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "white",
          padding: "5px",
          fontSize: "14px"
        }}>
          {text}
        </p>

      </div>
    </div>
  );
}