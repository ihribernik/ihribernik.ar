import { FooterProps } from "../interfaces";
import Contact from "./Contact";
import SocialButton from "./SocialButton";

const styles = {
  footer:
    "bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left",
  footerBorder:
    "flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between",
  footerBorderHidden: "mr-12 hidden lg:block",
  footerBorderHiddenSpan:
    "mb-4 flex justify-center font-semibold uppercase md:justify-start",
  socialSvg: "w-4 h-4",
};

const Footer = ({ info }: { info: FooterProps }) => {
  const creationDate = new Date("2022-12-01").getFullYear();
  const currentDate = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBorder}>
        <div className={styles.footerBorderHidden}>
          <span>Conéctate conmigo en las redes sociales:</span>
        </div>
        <div className=" lg:flex lg:justify-center">
          {info.socialMediaButtons.map((item) => (
            <SocialButton href={item.href} color={item.color}>
              <item.component
                className={styles.socialSvg}
                height={20}
                width={20}
              />
            </SocialButton>
          ))}
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-10 grid-cols-2">
          <div>
            <Contact />
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contacto
            </h6>
            {info.contact.map((item) => (
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <item.component
                  className="mr-3 h-5 w-5"
                  height={20}
                  width={20}
                />
                {item.innerText}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>
          ©{" "}
          {currentDate >= creationDate ? (
            <>
              {creationDate} - {currentDate}
            </>
          ) : (
            <> {creationDate} </>
          )}
          Ivan Hribernik con ❤️. Desde Buenos Aires, Argentina 🇦🇷
        </span>
      </div>
    </footer>
  );
};
export default Footer;
