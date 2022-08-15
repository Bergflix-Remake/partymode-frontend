import React from "react";
import Link from "../Link";

function Footer() {
  return (
    <div className="w-full p-8 bg-gray-100 shadow-inner dark:bg-darkest-dark dark:text-white">
      <div className="mb-4 sm:flex">
        <div className="h-auto text-3xl text-center sm:w-1/12 sm:text-sm md:text-base lg:text-lg xl:text-2xl">
          <div className="mb-2 font-bold dark:text-white text-clean-dark-500">
            Bergflix<span className="text-primary-500">.</span>
          </div>
        </div>
        <div className="h-auto mt-8 sm:w-1/4 sm:mt-0">
          <div className="mb-2 font-bold text-delorean-500">Social Media</div>
          <ul className="leading-normal list-reset">
            <li>
              <Link type="linkout" href="https://dev.bergflix.de/out/patreon">
                Patreon
              </Link>
            </li>
            <li>
              <Link type="linkout" href="https://dev.bergflix.de/out/patreon">
                Discord
              </Link>
            </li>
            <li>
              <Link type="linkout" href="https://dev.bergflix.de/out/patreon">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-auto mt-8 sm:w-1/4 sm:mt-0">
          <div className="mb-2 font-bold text-delorean-500">
            Bergflix. Brand
          </div>
          <ul className="leading-normal list-reset">
            <li>
              <Link type="link" href="https://dev.bergflix.de/branding">
                Bergflix. Branding
              </Link>
            </li>
            <li>
              <Link type="link" href="https://dev.bergflix.de/apply">
                Mithelfen
              </Link>
            </li>
            <li>
              <Link type="linkout" href="https://dev.bergflix.de/out/github">
                Bergflix Open Source
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-auto mt-8 sm:w-1/4 sm:mt-0">
          <div className="mb-2 font-bold text-delorean-500">
            Rechtliches & Hilfe
          </div>
          <ul className="leading-normal list-reset">
            <li>
              <Link type="link" href="https://dev.bergflix.de/legal/privacy">
                Datenschutz<span className="hidden md:inline">erklärung</span>
              </Link>
            </li>
            <li>
              <Link type="link" href="https://dev.bergflix.de/legal/terms">
                Cookies & Sicherheit
              </Link>
            </li>
            <li>
              <Link type="link" href="https://dev.bergflix.de/legal/impressum">
                Impressum
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-auto mt-8 sm:w-1/4 sm:mt-0">
          <div className="mb-2 font-bold text-delorean-500">
            Mehr von "Herr Bergmann"
          </div>
          <ul className="leading-normal list-reset">
            <li>
              <Link type="linkout" href="https://discord.gg/fromthefuture">
                Joine der “FTF”-Redaktion
              </Link>
            </li>
            <li>
              <Link type="linkout" href="https://www.patreon.com/herrbergmann">
                Unterstütze seine Projekte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
