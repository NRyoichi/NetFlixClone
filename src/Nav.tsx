import { useEffect, useState } from "react";
import "./style/Nav.css";

type Props = {
  className?: string;
};

export const Nav = (props: Props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`Nav ${show && "Nav-black"}`}>
      <img
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg"
        alt="PrimeVideoLogo"
      />
    </div>
  );
};
