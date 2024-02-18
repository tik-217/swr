import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const ax = await axios({
        url: "https://tigrangabulian.amocrm.ru/oauth2/access_token",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "https://109.195.23.223:34031",
        },
        proxy: {
          protocol: "https",
          host: "109.195.23.223",
          port: 34031,
        },
        responseType: "json",
        data: {
          client_id: "b235a361-6a4e-42ed-b1d6-20b51ccf1568",
          client_secret:
            "HO7QF8IR7WmFldGf47RBBA07JGAVoDWcHuCRllFpbpUYwVcZQtJg65AMKgjCaGZC",
          grant_type: "authorization_code",
          code: "def5020030aea5a7879899d1c31e7db791622c2223497a63bb2f0566e90c5e26975006a6ac1298d0fe05c6e4564ad638086e64b17d93a1d9c9e37363c2ac6e559ef4cd8765e919dca4ebf6d5fca4039a6be82617b8c3683fbf6b3afb8720e1dc28cf04dbe297c0e496bed80943713ffcd25f34f1daf59e7cdfa17769e8a5138ff5bee91f086d4706b66d9428163073723208304cd6b07dd088fbb1123cf022f863445b7b43755c9b4aa4a61c8249bfbbe64ce7fea0b1775e707c9c13e0a9987f2f9dc730b9a46d41df8ee829d0f3b0c21c18b661c1a22fd5d8d3a42da15531cac262288663f59e01a7ba0d3d4cde4bd85d5849df0bc6af04187e70df151d4b56ef5d92bcb0a64d6286f56ce6ee4d8e52f70f5d4a9b01a7b22d32f6e95a86cd360a4d5b1c7f0ea90400aa80e1666ee48901904b5ef86c71430363140038873a39cf15a0f5e790a24d30b26c2d863ff0a08f3a56c6eeb55fb6769ddedf39abb06733324f690a5cc15b34fede7750fb4ed54017925937bb26c0b067c8a184a1a407bb59ac85e79ccea8a95702a4801b72c94a3718babf8ff48d7345d4d38759bdf842ae5dff19e3f4dacf9c1da8551d9cb41499a22a892f6199bfd63c637fd181754fb9c870d17f0ce45b5e399f304e1c304dbbfd3d5d46b9257a8ac8f522",
          redirect_uri: "https://github.com/tik-217",
        },
      });

      console.log(ax);
    })();
  }, []);

  return <></>;
}

export default App;
