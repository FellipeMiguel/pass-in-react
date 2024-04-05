import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NevLink } from "./nev-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} />

      <nav className="flex items-center gap-5">
        <NevLink href="/eventos">Eventos</NevLink>
        <NevLink href="/participantes">Participantes</NevLink>
      </nav>
    </div>
  );
}
