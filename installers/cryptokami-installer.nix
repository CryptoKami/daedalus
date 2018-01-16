{ mkDerivation, base, directory, filepath, Glob, megaparsec, nsis
, stdenv, temporary, text, turtle
}:
mkDerivation {
  pname = "cryptokami-installer";
  version = "0.1.0.0";
  src = ./.;
  isLibrary = false;
  isExecutable = true;
  executableHaskellDepends = [
    base directory filepath Glob megaparsec nsis temporary text turtle
  ];
  description = "Cryptokami Installer";
  license = stdenv.lib.licenses.mit;
}
