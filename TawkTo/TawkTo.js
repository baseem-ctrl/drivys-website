import { useEffect } from "react";

function TawkTo() {
    useEffect(() => {
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();

        (function () {
            var s1 = document.createElement("script");
            s1.async = true;
            s1.src = "https://embed.tawk.to/68e4efec6c1cc5194c88195d/1j6v4id9u"; // Your script URL
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            document.body.appendChild(s1);
        })();
    }, []);

    return null; // This component doesn’t render anything
}

export default TawkTo;

