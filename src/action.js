export const SONRAKI_FILM = "SONRAKI_FILM";
export const ONCEKI_FILM = "ONCEKI_FILM";
export const LISTEYE_EKLE = "LISTEYE_EKLE";
export const LISTEDEN_CIKAR = "LISTEDEN_CIKAR";
export const BASA_DON = "BASA_DON";

export function sonrakiFilm() {
  return { type: SONRAKI_FILM };
}

export function oncekiFilm() {
  return { type: ONCEKI_FILM };
}

export function listeyeEkle() {
  return { type: LISTEYE_EKLE };
}

export function listedenCikar(id) {
  return { type: LISTEDEN_CIKAR, payload: id };
}
export function basaDon() {
  return { type: BASA_DON };
}
