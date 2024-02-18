import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    (async () => {
      console.log(33);

      const ax =
        active &&
        (await axios({
          url: "https://tigrangabulian.amocrm.ru/oauth2/access_token",
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "https://swr-five.vercel.app",
          },
          responseType: "json",
          data: {
            client_id: "bc24b181-3ebc-4f06-8918-ff64dc659c16",
            client_secret:
              "YmmPG8gyO82P1daxuTBQ2uF8gUBURYc0A27lrnUv9L7xI2RShWszilFvmgPWWFT4",
            grant_type: "authorization_code",
            code: "def50200724595c0bf2cbcdce7e8ce6422db500dc6bbdfe1ad542a13f4b0b3822d9b0d58eee254413f3f2422b864919aaf06d758e9d34c737ce54775220164874f856bf1dd91d31c86bcf48fb8e6b87de2fb7b24f45c27364d5f27001592c7154560b5abc45ab62473ee9c6fa282ca75f35573aeb3eb84a5bac8d19b6605a647181b24cfa2556d0ad6648c3d43e2ea1b9227f648daad5e1b48678a6cbc8687c0101d90ebbca6c6e817f953576c30e353417ed8fb6e7c9083cae3ac533d9292124c0be3eeb6bcdf8a41a41ee565b07ceedaf35611d36352e3de80d2bd6f8b304b2c3b421b19b220e546d292a2bd182d7f03a3917ee98bf33043ba22c006232018bc7375b687008985513695a592673fa903d3fa581c64e2df03c8d8ea6cbd71c8262eb76ab5716746124d0ee07f5a26c835649f98df3b49d4dc34f0efc301539cb9ee86dcf16119ffc1c03f6a8a510b31986b2b903ebe78e0306b5f5f03267556d2a4e8cf93d48d1ee382f8ab5f33b2f0a4a847383dccff0600720b0ef46cbb6d4000e38a6f55f1ca79dc6196179ac564bb27d08620b97deb3957c0393792aff334de2a20a107e8e64546ab5ecd985a865adba2e02c2938b67d3639055011d3319897fb9fba930a7ae9b114cbd7c3d3cff313335000fccb2e181aac38c8d322",
            redirect_uri: "https://swr-five.vercel.app/",
          },
        }));

      console.log(ax);
    })();
  }, [active]);

  return (
    <>
      <script
        className="amocrm_oauth"
        data-client-id="bc24b181-3ebc-4f06-8918-ff64dc659c16"
        data-title="Button"
        data-compact="false"
        data-class-name="className"
        data-color="default"
        data-state="state"
        data-error-callback="functionName"
        data-mode="popup"
        src="https://www.amocrm.ru/auth/button.min.js"
      ></script>
      <button onClick={() => setActive(true)}>Connect</button>
    </>
  );
}

export default App;
