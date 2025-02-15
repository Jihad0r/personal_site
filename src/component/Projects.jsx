import { projects } from './data';
import { TitleEffect } from './effects/TextEffect';

export const Projects = () => {
  return (
    <div className='p-4 mt-10'>
    <p className='text-center m-auto mb-10'><TitleEffect text={"Projects"}  size={"text-5xl"}/></p>
    <div className="grid lg:grid-cols-2 gap-10"id="Projects">
        {projects.map((repo) => (
  <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col items-center space-y-3 transition-transform duration-300 relative hover:scale-105">
  <div className="project w-full overflow-hidden rounded-xl border-2 border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-100 relative">
    <img
      src={repo.img}
      href={repo.site}
      alt={repo.name}
      className="w-full h-56 object-cover transition-transform duration-300"
    />
    <div className="links flex justify-center absolute -top-5 right-5">
      <a
        href={repo.site}
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline flex items-center transition-all duration-300 hover:text-blue-800"
      >
        🔗 Demo
      </a>
      <a
        href={repo.github}
        rel="noopener noreferrer"
        className="text-gray-600 hover:underline flex items-center transition-all duration-300 hover:text-gray-800"
      >
        🔗 GitHub Repo
      </a>
    </div>
    <div className="description absolute -bottom-60 left-0 right-0 p-3 bg-gradient-to-r from-[oklch(0.56_0.29_302.32/_0.33)] to-[oklch(0.62_0.21_259.82/_0.33)] text-white overflow-hidden">
      <p className="text-lg font-semibold">{repo.name}</p>
      <p className="text-sm">{repo.description}</p>
      <div className='flex'>
        Tools:
        {repo.languages.map((lang, index) => (
          <p className='m-3 text-sm' key={index}>{lang}</p>
        ))}
      </div>
    </div>
  </div>
</div>


))}

    </div></div>
  );
};



