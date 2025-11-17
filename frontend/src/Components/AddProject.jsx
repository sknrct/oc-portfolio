import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "./Navbar";
import { FILTERS } from "../constants";
import toast from "react-hot-toast";

const formClass = "p-2 border border-gray-500 rounded bg-transparent focus:ring-2 focus:ring-orange-600 outline-none"

function Ajouter() {
  const { register, handleSubmit, reset } = useForm();
  const [preview, SetPreview] = useState(null)
  const [selectedTechs, setSelectedTechs] = useState([]);

  const technologies = FILTERS.filter((tech) => tech !== "All");

  const onSubmit =  async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("cahier_des_charges", data.cahierDesCharges);
    formData.append("skills", data.skills);
    formData.append("description", data.description);
    formData.append("github", data.github);
    formData.append("website", data.website);
    formData.append("image", data.image[0]);
    formData.append("technologies", JSON.stringify(selectedTechs));

    try {
      const response = await fetch("http://127.0.0.1:8000/api/projects/", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi");
      toast('Success',
        {
          icon: '✅',
          style: {
            borderRadius: '10px',
            background: 'black',
            color: '#f97316',
          },
        }
      );
      reset()
      SetPreview(null)
      setSelectedTechs([])
    } catch (err) {
      console.error(err)
      toast('Error',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: 'black',
            color: '#f97316',
          },
        }
      );
    }}

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) SetPreview(URL.createObjectURL(file));
    else SetPreview(null)
  }

  const handleSelectTech = (e) => {
    const tech = e.target.value;
    if (tech && !selectedTechs.includes(tech)) {
      setSelectedTechs([...selectedTechs, tech])
    }
    e.target.value = "";
  }

  const removeTech = (tech) => {
    setSelectedTechs(selectedTechs.filter((t) => t !== tech))
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center py-24">
        <h1 className="pb-6 text-6xl tracking-tight lg:mt-4 lg:text-8xl text-center lg:text-left">
          Ajouter un projet
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 flex flex-col gap-4 w-1/2 text-white"
        >
          <input
            {...register("title")}
            placeholder="Titre du projet"
            className={formClass}
          />
          <input
            {...register("description")}
            placeholder="Description"
            className={formClass}

          />
          <textarea
            {...register("cahierDesCharges")}
            placeholder="Cahier des charges"
            className={formClass}

          />
          <textarea
            {...register("skills")}
            placeholder="Skills"
            className={formClass}

          />
          
          <input
            {...register("github")}
            placeholder="Lien GitHub"
            className={formClass}

          />
          <input
            {...register("website")}
            placeholder="Lien du site"
            className={formClass}
          />
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
            className={formClass}

          />
          {preview && (
            <div className="mt-2">
              <p className="text-gray-500 mb-1"> Apercu :</p>
              <img
                src={preview}
                alt="Preview"
                className="p-2 border border-gray-500 rounded bg-transparent focus:ring-2 focus:ring-orange-600 outline-none w-1/4"

              />
            </div>
          )}

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2 border border-gray-500 rounded p-2 focus-within:ring-2 focus-within:ring-orange-600">
              {selectedTechs.map((tech) => (
                <span
                  key={tech}
                  className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTech(tech)}
                    className="ml-1 text-xs text-white hover:text-red-700"
                  >
                    ✕
                  </button>
                </span>
              ))}

              {/* Sélecteur intégré */}
              <select
                onChange={handleSelectTech}
                className="bg-transparent outline-none text-gray-600"
                defaultValue=""
              >
                <option value="" disabled>
                  + Ajouter
                </option>
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
}

export default Ajouter