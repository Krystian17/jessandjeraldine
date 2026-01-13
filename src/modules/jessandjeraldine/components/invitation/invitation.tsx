import "../../styles/invitation.scss";
import Image from "next/image";
import toBase64 from "@/components/base64";
import shimmer from "@/components/shimmer";
import { url } from "inspector";

type propType = {
  client: string;
};

const Invitation = ({ client }: propType) => {
  return (
    <section
      id="invitation"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        padding: "10rem 0rem 10rem",
        width: "100%",
      }}
    >
       <video
        height={300}
        width={300}
        className={`invi-video`}
        controls={true}
        poster={`/img/${client}/thumbnail.png`}
        loop
      >
        <source src="/video/jessandjeraldine.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Invitation;

/*


 <video
        height={300}
        width={300}
        className={`invi-video`}
        controls={true}
        poster={`/img/${client}/thumbnail.png`}
        loop
      >
        <source src="/video/ks-1.mp4" type="video/mp4" />
      </video>
*/
