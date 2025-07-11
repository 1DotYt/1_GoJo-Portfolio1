import PixelButton from './PixelButton';
import GlitchText from './GlitchText';
 
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'All Animation',
      type: 'Roblox Animations',
      status: 'ACTIVE',
      description: 'Check out all the Roblox animations I’ve created! Each animation brings a unique touch to gameplay. Click the link below to explore them directly in the Roblox game.',
      tech: ['Animation', 'Anime', 'Scripted', 'Many', 'Best', 'Roblox', 'Studio'],
      color: 'border-cyber-blue',
      image: 'https://cdn.discordapp.com/attachments/815264749510983751/1393190759922139236/35eb6bc9-f0ca-49e6-97ad-0a3210d076ae.gif?ex=68724581&is=6870f401&hm=3c1cbb11c8abc210705f19cced5561f317886d09f42dce7a1e32fed82da7d5ab&',
      codeUrl: '#',
      demoUrl: 'https://www.roblox.com/games/14408644834/All-Animations-Portfolio',
    },
    {
      id: 2,
      title: 'Roblox Game',
      type: 'My First Game',
      status: 'DEPLOYED',
      description: 'This is my first and best Roblox game! Built with passion and creativity, it’s a fun, troll-filled obby with ragdoll physics, moving traps, and stylish design. Whether you’re here to laugh, race, or get trolled, this game delivers a wild experience you won’t forget!.',
      tech: ['Scripting', 'Obby', 'Troll', 'Ragdoll'],
      color: 'border-cyber-green',
      image: 'https://cdn.discordapp.com/attachments/815264749510983751/1393190760383254538/f5f432bc-16c5-440c-80eb-7300005d5b2e.gif?ex=68724581&is=6870f401&hm=91655b81986abe2e923ba71a16cd75934f82b35e7bdd426432293e751314ea1f&',
      codeUrl: '#',
      demoUrl: 'https://www.roblox.com/share?code=0c30455cf014614d800a003ab6e0aeb0&type=ExperienceDetails&stamp=1752237497488',
    },
    {
      id: 3,
      title: 'My Songs',
      type: 'All My Songs i Created in this channel',
      status: 'BETA',
      description: 'All the songs on this channel are made by me – using AI and my brain (lol)! From the melody to the vibe, every track is a mix of creativity and tech. Hope you enjoy the music as much as I enjoyed making it!.',
      tech: ['Ai', 'Vocal', 'vocabulary', 'Music', 'Talent Only'],
      color: 'border-cyber-pink',
      image: 'https://cdn.discordapp.com/attachments/815264749510983751/1393190761117388881/Baikakn.gif?ex=68724581&is=6870f401&hm=a1a6a0eaa69f1609416a044667ee3fed9f4c620abad63437ea62f06db3ba1a03&',
      codeUrl: 'https://youtu.be/M0CFMUNiy7Q?si=zCKOqmi25R5Ib5pM',
      demoUrl: 'https://youtube.com/@1_gojor?si=Sq4rcRg1BR9VECHN',
    },
    {
      id: 4,
      title: 'Websites',
      type: 'Here all the created website and more by me',
      status: 'DEVELOPMENT',
      description: 'I’ve built websites using React, Node.js, C++, HTML, Java, and Python.From front-end design to back-end logic, I’ve explored it all. I’ve created many websites using these skills – and all the links will be available below soon. (Stay tuned!)',
      tech: ['html', 'c++', 'java', 'MetaMask','python','react.js'],
      color: 'border-cyber-orange',
      image: 'https://cdn.discordapp.com/attachments/815264749510983751/1393190761486614648/pixel-art-13_gif_500332.gif?ex=68724581&is=6870f401&hm=dcf4fe737ba15bb9334d85a317a414364de1867f6d668e11a9f8478881e42d4f&',
      codeUrl: '',
      demoUrl: '',
    },
    {
      id: 5,
      title: 'EDITINGS',
      type: 'Editing videos channel',
      status: 'RESEARCH',
      description: 'I also do video editing!I’ve worked on some cool edits and I’m pretty good at it. Check out all my edits and content on my YouTube channel down below!',
      tech: ['Editing', 'Software', 'Ai'],
      color: 'border-cyber-purple',
      image: 'https://cdn.discordapp.com/attachments/815264749510983751/1393204440328306699/51591da1-61c7-4fa5-9058-cd08bc652aec.gif?ex=6872523f&is=687100bf&hm=c54aa6bf88f45d31bb53dd398ff61f2d106ce6457ff4397ef9b2ec57d71babf4&',
      codeUrl: 'https://youtube.com/@1_gojoyt?si=Da2F_pxntpp7oA2E',
      demoUrl: 'https://youtube.com/@1_gojoyt?si=Da2F_pxntpp7oA2E',
    },
    {
      id: 6,
      title: 'AI + GFX Power',
      type: 'Full Stack Web App · AI Assistant · Photoshop Design',
      status: 'ACTIVE',
      description: 'This project combines my best skills — coding and creativity.I built an advanced AI Assistant using React, Node.js, and OpenAI’s API that can generate content, answer questions, and help with coding. At the same time, I bring visuals to life as a Photoshop/GFX creator, making clean banners, thumbnails, and game art. The link doesnt work connect my gmail to see!',
      tech: ['OpenAi Api', 'Canva', 'Photopea', 'Node.js'],
      color: 'border-neon-blue',
      image: 'https://cdn.discordapp.com/attachments/815264749510983751/1393204440965583020/TENTEN.gif?ex=6872523f&is=687100bf&hm=f96715bc27c9c989e1c3905b567893f448214a1dd22526f0ae84336443caac2d&',
      codeUrl: '#',
      demoUrl: '#',
    }
  ];
 
  const statusColors = {
    'ACTIVE': 'text-cyber-green',
    'DEPLOYED': 'text-cyber-blue',
    'BETA': 'text-cyber-orange',
    'DEVELOPMENT': 'text-cyber-pink',
    'RESEARCH': 'text-cyber-purple'
  };
 
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-cyber-dark to-dark-bg relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: "url('/media/pixel-jeff-clipa-s.gif')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
 
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GlitchText className="text-3xl md:text-5xl text-cyber-green mb-4">
            PROJECTS.DATABASE
          </GlitchText>
          <div className="text-cyber-blue text-lg">LOADING PROJECT ARCHIVES...</div>
        </div>
 
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`pixel-button ${project.color} p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Box */}
              <div className="w-full h-32 mb-4 bg-gradient-to-br from-cyber-dark to-black border border-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      width={350}
                      height={220}
                     className="rounded-lg border border-white/20 object-cover w-full h-64 mb-4"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  ) : (
                    <div className="text-4xl opacity-60">
                      {project.type === 'AI/ML' && '🤖'}
                      {project.type === 'FULL-STACK' && '⚡'}
                      {project.type === 'FRONTEND' && '📊'}
                      {project.type === 'WEB3' && '🔗'}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 opacity-20 pixel-perfect"
                  style={{
                    backgroundImage: `url(\"data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${project.color.includes('blue') ? '06B6D4' : project.color.includes('green') ? '10B981' : project.color.includes('pink') ? 'EC4899' : project.color.includes('orange') ? 'F97316' : '8B5CF6'}'%3E%3Cpath d='M0 0h2v2H0V0zm2 2h2v2H2V2z'/%3E%3C/g%3E%3C/svg%3E\")`,
                    backgroundSize: '8px 8px'
                  }}
                />
              </div>
 
              {/* Title + Status */}
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <GlitchText className="text-lg text-white font-bold">
                    {project.title}
                  </GlitchText>
                  <div className="text-xs text-cyber-blue uppercase">{project.type}</div>
                </div>
                <div className={`text-xs px-2 py-1 border ${statusColors[project.status]} border-current`}>
                  {project.status}
                </div>
              </div>
 
              {/* Description */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
 
              {/* Tech Stack */}
              <div className="space-y-3">
                <div className="text-xs text-cyber-purple uppercase tracking-wider">TECH STACK:</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-cyber-dark border border-gray-600 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
 
              {/* Buttons */}
              <div className="flex gap-2 mt-6">
                <a
                  href={project.codeUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <PixelButton variant="primary" size="sm" className="w-full">
                    VIEW VIDEO
                  </PixelButton>
                </a>
                <a
                  href={project.demoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <PixelButton variant="accent" size="sm" className="w-full">
                    CHECK OWN
                  </PixelButton>
                </a>
              </div>
            </div>
          ))}
        </div>
 
        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <div className="pixel-button border-cyber-purple text-white p-8 max-w-2xl mx-auto">
            <GlitchText className="text-2xl text-cyber-purple mb-6">
              GITHUB.STATS
            </GlitchText>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl text-cyber-green font-bold">2+</div>
                <div className="text-xs text-gray-400">COMMITS</div>
              </div>
              <div>
                <div className="text-2xl text-cyber-blue font-bold">6+</div>
                <div className="text-xs text-gray-400">REPOS</div>
              </div>
              <div>
                <div className="text-2xl text-cyber-pink font-bold">10+</div>
                <div className="text-xs text-gray-400">LANGUAGES</div>
              </div>
              <div>
                <div className="text-2xl text-cyber-orange font-bold">3+</div>
                <div className="text-xs text-gray-400">STARS</div>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
};
 
export default ProjectsSection;