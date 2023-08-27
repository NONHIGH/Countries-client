import { FooterMain, SectionFooterLink } from "../stylesComponent/StyleFooter";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <FooterMain>
      <SectionFooterLink>
        <ul>
          <li>
            <a href="https://github.com/NONHIGH" target="_blank" rel='noreferrer'>
              <img src={github} alt="github" title="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/angel-bryan-luis-roman-a09328260" target="_blank" rel='noreferrer'>
              <img src={linkedin} alt="linkedin" title="linkedin" />
            </a>
          </li>
        </ul>
      </SectionFooterLink>
    </FooterMain>
  );
}
export default Footer;
