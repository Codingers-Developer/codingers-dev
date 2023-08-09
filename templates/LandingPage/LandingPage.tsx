import Script from "next/script";
import styles from "./LandingPage.module.css";
import { Container } from "./components/Container";
import { InlineCode } from "./components/InlineCode";
import { Link } from "./components/Link";
import { Paragraph } from "./components/Paragraph";
import { Section } from "./components/Section";
import { Subtitle } from "./components/Subtitle";
import { TechnologyGrid } from "./components/TechnologyGrid";
import { H1, H2 } from "./components/headings";
import { technologies } from "./technologies";

const LandingPageTemplate = () => {
  const onConfettiLoad = () => {
    const key = "create-next-stack-hasShownConfetti-my-app";
    const hasShownConfetti = localStorage.getItem(key);
    if (hasShownConfetti != null) return;

    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    (function frame() {
      const timeLeft = animationEnd - Date.now();

      (window as any).confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: Math.max(200, 500 * (timeLeft / duration)),
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        shapes: ["square", "circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.1, 0.1),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();

    localStorage.setItem(key, "true");
  };

  return (
    <div className={styles.landingPageTemplate}>
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.9.3/tsparticles.confetti.bundle.min.js"
        onLoad={onConfettiLoad}
      />
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            line-height: 1.5;
          }
        `}
      </style>
      <main>
        <Section>
          <Container center className={styles.headerSection}>
            <H1>
              <span className={styles.textGradient}>Codingers Developer</span>{" "}
              🎉
            </H1>
            <Subtitle>
              Development by us <InlineCode>Team Developer</InlineCode>
            </Subtitle>
          </Container>
        </Section>
        <Section>
          <Container className={styles.textContainer}>
            <H2>About Us</H2>
            <Paragraph>
            Our group is a group of students who are at the {" "}
            <InlineCode>Garut Institute of Technology</InlineCode>, with a focus on studying in the field of Computer Science. We consist of a group of individuals who are passionate and dedicated to the development of technology and computer science.
            We have the same goal, which is to increase our understanding in the field of computer science and apply it in useful projects. We are always trying to improve our skills in programming, data analysis, artificial intelligence, computer networking and other relevant fields.
            </Paragraph>
          </Container>
        </Section>
        <Section>
          <Container className={styles.technologyGridIntro}>
            <H2>Technologies</H2>
            <Paragraph>
            In the campus environment, we apply and develop our knowledge in the {" "}
            <InlineCode> C++</InlineCode> programming language. We understand the basics of programming with C++ and we are skilled in using concepts such as variables, control structures, functions, and data processing.
            Apart from that, we also explore our skills in the {" "}
            <InlineCode> Python</InlineCode>Python programming language. We have an understanding and use of existing data structures, functions and modules.
            </Paragraph>
            <Paragraph>
            In developing with {" "} <InlineCode> HTML, CSS, JavaScript, React and Next.js</InlineCode>, we focus on developing responsive, interactive and easy-to-use web applications. We strive to use best practices in front-end development, including quality testing, efficient state setting and optimal performance.
            We love to expand our knowledge in this modern web technology and keep learning about the latest trends and tools relevant to front-end development.
            </Paragraph>
          </Container>
          <Container wide>
            <TechnologyGrid
              technologies={technologies}
              className={styles.technologyGrid}
            />
          </Container>
        </Section>
      </main>
      <footer>
        <Section>
          <Container center>
            <Paragraph>
              Generated by{" "}
              <Link href="https://github.com/Codingers-Developer">
                Codingers Developer
              </Link>
            </Paragraph>
          </Container>
        </Section>
      </footer>
    </div>
  );
};

export default LandingPageTemplate;
