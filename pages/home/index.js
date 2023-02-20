import { isMobile } from "@/components/IsMobile";
import ThoughtBox from "@/components/ThoughtBox";
import LeftSection from "@/containers/HomePage/LeftSection";
import { useRouter } from "next/router";
import React from "react";

export default function Homepage() {
  const data = [
    {
      id: 1,
      title:
        "Sint cupidatat ea qui ut veniam reprehenderit eiusmod in excepteur.",
      headline:
        "Culpa mollit consequat non mollit minim pariatur ipsum deserunt quis irure enim sint velit. Tempor elit culpa anim non officia amet cupidatat duis minim irure ex pariatur. Elit in qui irure laboris minim nulla duis enim est anim dolor veniam voluptate culpa.",
      content:
        "Ex excepteur laboris deserunt dolor aute. Nisi eiusmod ullamco quis ut amet. Incididunt aliquip eiusmod velit tempor qui exercitation nostrud non amet excepteur consectetur. Consectetur incididunt quis nostrud anim elit irure non occaecat consequat ullamco laborum sit laborum est. Proident consequat tempor eiusmod reprehenderit et sunt excepteur nostrud et enim tempor ea dolor in. Veniam laboris anim non dolor ex laborum reprehenderit incididunt deserunt veniam nisi. Quis fugiat ex incididunt officia.Lorem fugiat ullamco esse dolor commodo adipisicing in pariatur voluptate. Culpa pariatur cillum culpa duis aliquip ad culpa do nisi deserunt deserunt consectetur labore. In ipsum quis Lorem duis sit. Ex dolore commodo qui irure. Commodo duis ut anim ipsum laboris consequat incididunt. Ad proident aliqua magna irure eiusmod pariatur minim amet mollit minim non. Velit esse eu deserunt deserunt.Ex id nulla irure nisi non nisi non aliquip fugiat dolor nostrud adipisicing. Esse dolore tempor et tempor excepteur fugiat duis nulla anim cillum veniam. Sit ea et laborum nostrud labore ipsum. Laborum sint aliquip do occaecat cupidatat minim nisi ullamco velit qui exercitation ad. Tempor ut incididunt anim incididunt ad velit aliquip incididunt nisi et sunt voluptate.",
    },
    {
      id: 2,
      title:
        "Sunt labore magna culpa tempor magna adipisicing elit occaecat non nostrud aliqua dolor veniam.",
      headline:
        "Occaecat Lorem cupidatat ullamco reprehenderit cillum amet commodo commodo. Laborum esse eiusmod qui do ipsum nulla nisi irure ut laboris. Labore enim voluptate dolor non consequat excepteur aliquip nulla magna. Consectetur ex tempor ex aliquip sit cupidatat esse enim cillum elit ad. Sint laborum aute amet in incididunt elit officia elit occaecat sunt. Id occaecat aute est culpa.",
      content:
        "Magna proident incididunt in cillum dolore fugiat qui proident esse cillum. Officia aute duis sit excepteur aute enim in sunt ipsum nisi ad. Minim cillum ea ex sit anim Lorem laboris cillum est est non officia. Excepteur dolore occaecat magna non enim labore anim. Qui amet mollit anim ut Lorem dolore velit irure et. Lorem esse reprehenderit cillum mollit incididunt. Anim id fugiat Lorem velit commodo excepteur.Culpa eu nostrud laboris amet duis Lorem minim ex cupidatat nisi do. Incididunt elit velit nisi tempor pariatur reprehenderit velit cupidatat cillum velit in tempor nostrud ea. Eiusmod aliquip adipisicing enim deserunt aliqua. Dolore ullamco id id et incididunt mollit culpa eiusmod qui. Incididunt sint in minim anim excepteur anim velit. Ex duis eu veniam eiusmod quis. Exercitation anim exercitation irure nostrud dolore dolor esse reprehenderit esse ad consectetur.",
    },
    {
      id: 3,
      title: "Non officia elit veniam ullamco anim labore.",
      headline:
        "Adipisicing ullamco minim id ex ullamco pariatur est velit deserunt quis aliqua do. Aute aliqua adipisicing qui cupidatat esse occaecat incididunt excepteur cillum consequat Lorem ad proident. Irure voluptate commodo tempor nostrud ipsum exercitation. Nisi do est minim ut aute veniam ea exercitation incididunt consectetur.",
      content:
        "Dolore officia pariatur deserunt aute excepteur qui et nisi eu ipsum labore sit. Exercitation nulla amet consectetur deserunt minim irure consectetur exercitation proident in fugiat adipisicing. Aliquip sint nulla sunt anim cupidatat voluptate laborum in sunt quis exercitation reprehenderit. Sunt minim commodo ut aliquip eu non consectetur ad fugiat. Deserunt occaecat commodo sunt officia. Tempor non id velit cupidatat.Deserunt in aute fugiat sint velit amet labore. Consequat nisi eiusmod qui labore velit nulla in ex magna fugiat veniam adipisicing ad minim. Mollit cupidatat pariatur cupidatat irure irure sint minim laboris excepteur cupidatat ut voluptate id mollit. Laboris est id magna sit incididunt aliquip pariatur officia esse ea reprehenderit in voluptate minim.Aute magna consequat sit reprehenderit mollit irure quis Lorem in nulla dolore ad. Aute tempor sunt ullamco quis minim adipisicing elit labore proident. Et proident officia minim ex.Aliqua sit officia non est eu et. Do voluptate laborum fugiat et commodo minim. Amet culpa aliqua ut magna officia. Ad incididunt nisi amet cillum id. Sint in irure eiusmod ad dolor irure dolore excepteur culpa ea sunt ea. In aliqua aute culpa incididunt cillum aliqua anim commodo irure. Eiusmod adipisicing culpa irure dolore.",
    },
  ];
  const router = useRouter();
  const selectParagraph = (id) => {
    console.log(id);
    const thought = data.filter((i) => i.id === id);
    console.log(thought);
    // router.push("/home/" + id);
    router.push({
      pathname: "/home/" + id,
    });
  };
  const showThoughts = () => {
    const thoughts = [];
    {
      data.map((i) => {
        thoughts.push(
          <ThoughtBox
            title={i.title}
            headline={i.headline}
            id={i.id}
            key={i.id}
            selectParagraph={selectParagraph}
          />
        );
      });
    }
    return thoughts;
  };
  return (
    <>
      <div className="home">
        <LeftSection />
        <div>
          <h1>Thoughts</h1>
          <div className="thought-tab">{showThoughts()}</div>
        </div>
      </div>
    </>
  );
}
