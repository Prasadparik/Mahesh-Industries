import React from "react";
import "./WhatsApp.css"; // Styling for WhatsApp component

const WhatsApp = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="whatsapp-icon"
      style={{ padding: "0.5rem" }}
      onClick={handleWhatsAppClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0,0,255.99609,255.99609"
      >
        <g
          fill="#ffffff"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="scale(5.33333,5.33333)">
            <path d="M24,3.99805c-11.02771,0 -20,8.97229 -20,20c0,3.27532 0.86271,6.33681 2.26172,9.06641l-2.16797,7.76172c-0.50495,1.8034 1.27818,3.58644 3.08203,3.08203l7.76758,-2.16797c2.72738,1.39608 5.78439,2.25781 9.05664,2.25781c11.02771,0 20,-8.97229 20,-20c0,-11.02771 -8.97229,-20 -20,-20zM24,6.99805c9.40629,0 17,7.59371 17,17c0,9.40629 -7.59371,17 -17,17c-3.00158,0 -5.8094,-0.78052 -8.25781,-2.14453c-0.34512,-0.19235 -0.7522,-0.24078 -1.13281,-0.13477l-7.38672,2.06055l2.0625,-7.38281c0.10655,-0.38122 0.05811,-0.7891 -0.13477,-1.13477c-1.36674,-2.4502 -2.15039,-5.25915 -2.15039,-8.26367c0,-9.40629 7.59371,-17 17,-17zM17.24023,15c-0.319,0 -0.83444,0.11966 -1.27344,0.59766c-0.438,0.476 -1.67187,1.63047 -1.67187,3.98047c0,2.35 1.71022,4.61945 1.94922,4.93945c0.238,0.317 3.3032,5.29498 8.1582,7.20898c4.034,1.59 4.85447,1.27336 5.73047,1.19336c0.876,-0.078 2.82661,-1.15353 3.22461,-2.26953c0.398,-1.116 0.39825,-2.07058 0.28125,-2.26758c-0.119,-0.199 -0.43802,-0.31959 -0.91602,-0.55859c-0.477,-0.239 -2.82372,-1.39373 -3.26172,-1.55273c-0.438,-0.159 -0.75817,-0.23972 -1.07617,0.23828c-0.318,0.478 -1.23272,1.55309 -1.51172,1.87109c-0.279,0.32 -0.55716,0.36009 -1.03516,0.12109c-0.479,-0.241 -2.0158,-0.74409 -3.8418,-2.37109c-1.42,-1.265 -2.3753,-2.82864 -2.6543,-3.30664c-0.278,-0.476 -0.03002,-0.73761 0.20898,-0.97461c0.215,-0.214 0.4778,-0.55694 0.7168,-0.83594c0.237,-0.279 0.31561,-0.47692 0.47461,-0.79492c0.159,-0.317 0.07994,-0.59694 -0.03906,-0.83594c-0.119,-0.239 -1.04766,-2.60187 -1.47266,-3.54687c-0.357,-0.794 -0.73322,-0.81122 -1.07422,-0.82422c-0.278,-0.011 -0.59802,-0.01172 -0.91602,-0.01172z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default WhatsApp;
