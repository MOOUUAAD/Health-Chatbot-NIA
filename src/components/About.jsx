import React from "react";
var u =
  "https://punchlistzero.com/wp-content/uploads/2022/04/Engineer-vs-Medicine-Which-is-harder-1024x511.jpg";
const About = () => {
  return (
    <div className="mx-auto pt-10 md:pb-8 px-4 md:px-6 bg-[#111827]" id="about">
      <section className="md:mt-12 mb-28">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src="https://www.collegenp.com/uploads/2023/04/Biomedical-Engineering.jpg"
                className="z-[10] w-4/5 m-auto md:w-full rounded-lg shadow-lg lg:ml-[50px]"
                alt="image"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-blue-900 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-8 text-3xl font-bold">Notre Mission</h2>

                <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Réseau académique
                  </p>
                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Approche de R&D scientifique
                  </p>
                  <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Vision nationale
                  </p>
                </div>
                <div className="mt-6">
                  <p className=" text-white m-4">
                    La mission centrale est de concretiser un espace de partage
                    d'expertise scientifique, où le potentiel humain est
                    l'épicentre de notre engagement. Dans un projet sans
                    précédent, portant haut l'étendard du patriotisme et du
                    génie marocain, l'association NIA s'immerge dans une
                    initiative visant à rassembler une multitude de profils
                    issus de diverses écoles supérieures et facultés à fin de
                    tisser des liens pratiques de communication et de conception
                    multidisciplinaires pour les sciences médicales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
