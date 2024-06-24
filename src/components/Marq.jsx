import React from "react";
import Marquee from "react-fast-marquee";

const Marq = () => {
  const firstMarq = () => {
    return [
      "Ahlan wa sahlan para pecinta Rasulullah SAW",
      "Orang Yang Menyebarkan Shalawat Di Antara Umat Manusia (Mengingatkan Orang Untuk Bershalawat Kepada Rasulullah SAW) Dia Akan Menjadi Orang Yang Paling Dekat Dengan Rasulullah SAW.",
      "Layanilah Orang Tuamu Seperti Raja, Maka Rezekimu Juga Akan Menjadi Seperti Raja.",
    ];
  };
  return (
    <Marquee
      speed={60}
      className="bg-lprimary text-primary dark:bg-primary dark:text-white dark:border-b dark:border-t border-b border-t border-slate-500 anim"
    >
      {firstMarq().map((sentence, index) => (
        <div className="mx-56" key={index}>
          <p className="uppercase py-3 text-xs md:text-md tracking-wider">
            {sentence}
          </p>
        </div>
      ))}
    </Marquee>
  );
};

export default Marq;
