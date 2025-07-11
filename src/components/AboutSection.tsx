import PixelButton from './PixelButton';
import GlitchText from './GlitchText';
import { useLeetCodeStats } from '@/hooks/useLeetCodeStats';

interface AboutSectionProps {
  onSectionChange?: (section: string) => void;
}

const AboutSection = ({ onSectionChange }: AboutSectionProps) => {
  const { stats, loading, error, lastUpdated, refresh } = useLeetCodeStats();
  
  const skills = [
    { name: 'C++/Python', level: 40, color: 'bg-cyber-purple' },
    { name: 'React/Next.js', level: 40, color: 'bg-cyber-blue' },
    { name: 'Node.js/Express.js', level: 37, color: 'bg-cyber-green' },
    { name: 'AI/ML', level: 20, color: 'bg-cyber-pink' },
    { name: 'Database', level: 70, color: 'bg-cyber-orange' },
    { name: 'Cloud/DevOps', level: 10, color: 'bg-cyber-purple' }
  ];

  const formatLastUpdated = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours}h ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days}d ago`;
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-dark-bg to-cyber-dark relative overflow-hidden">
      {/* Minimal cyberpunk GIF overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: "url('/media/pixel-jeff-clipa-s.gif')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08}} />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GlitchText className="text-3xl md:text-5xl text-cyber-pink mb-4">
            PROFILE.EXE
          </GlitchText>
          <div className="text-cyber-blue text-lg">ACCESSING PERSONAL DATA...</div>
        </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center md:gap-12">
  {/* Left Column - Profile */}
  <div className="space-y-8 w-full max-w-screen-sm mx-auto md:h-full md:flex md:flex-col md:justify-between">
    {/* Profile Card */}
    <div className="pixel-button border-cyber-purple text-white p-8 px-2 md:px-8 relative w-full">
      {/* Profile Avatar */}
      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyber-pink to-cyber-blue pixel-perfect relative rounded-full overflow-hidden">
        <img
          src="https://cdn.discordapp.com/attachments/815264749510983751/1393133065332723802/file_00000000e708622fa995f26511c642f7.png?ex=68720fc5&is=6870be45&hm=e1ce0229f82d2f2409bf2fe3267ccc793f4b6e3abf195d74a63907e3dea586fd&"
          alt="Profile Avatar"
          className="w-full h-full object-cover"
        />
      </div>
              {/* Bio */}
              <div className="space-y-4 text-sm">
                <div className="text-center">
                  <GlitchText className="text-xl text-cyber-green mb-2">
                    1_GOJO
                  </GlitchText>
                  <div className="text-cyber-blue">Full-Stack Developer</div>
                  <div className="text-cyber-pink">AI/Roblox Animator Etc</div>
                </div>

                <div className="border-t border-cyber-purple pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">ROBLOX TALENT:</span>
                    <span className="text-cyber-green">ANIMATION ETC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">LEVEL:</span>
                    <span className="text-cyber-blue">BEGGINNER</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SPECIALIZATION:</span>
                    <span className="text-cyber-pink">FULL-STACK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">STATUS:</span>
                    <span className="text-cyber-green animate-pulse">ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Glitch Effect */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-cyber-pink animate-ping" />
            </div>

            {/* LeetCode Stats */}
            <div className="pixel-button border-cyber-orange text-white p-6 px-2 md:px-6 relative w-full">
              <div className="flex justify-between items-center mb-4">
                <GlitchText className="text-lg text-cyber-orange text-center w-full">
                  ROBLOX-SCRIPT.STATS
                </GlitchText>
              </div>
              
              {error && (
                <div className="text-red-400 text-xs mb-4 text-center">
                  ⚠️ {error}
                </div>
              )}
              
              {lastUpdated && (
                <div className="text-cyber-orange/70 text-xs mb-4 text-center">
                  Last updated: {formatLastUpdated(lastUpdated)}
                </div>
              )}
              
              <div className="space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-cyber-dark p-3 border border-gray-600">
                    <div className="text-2xl text-cyber-green font-bold">
                      {loading ? '...' : `${stats?.totalSolved || 99}+`}
                    </div>
                    <div className="text-xs text-gray-400">SOLVED</div>
                  </div>
                  <div className="bg-cyber-dark p-3 border border-gray-600">
                    <div className="text-2xl text-cyber-blue font-bold">
                      {loading ? '...' : `${stats?.accuracy || 0}%`}
                    </div>
                    <div className="text-xs text-gray-400">ACCURACY</div>
                  </div>
                  <div className="bg-cyber-dark p-3 border border-gray-600">
                    <div className="text-2xl text-cyber-pink font-bold">
                      {loading ? '...' : stats?.rating || 5}
                    </div>
                    <div className="text-xs text-gray-400">RATING</div>
                  </div>
                  <div className="bg-cyber-dark p-3 border border-gray-600">
                    <div className="text-2xl text-cyber-orange font-bold">
                      {loading ? '...' : (stats?.rank?.replace('CONTESTS: ', '') || 'N/A')}
                    </div>
                    <div className="text-xs text-gray-400">CONTESTS</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-cyber-green">EASY</span>
                      <span className="text-gray-400">
                        {loading ? '...' : `${stats?.easySolved || 100}/${stats?.easyTotal || 150}`}
                      </span>
                    </div>
                    <div className="h-2 bg-cyber-dark border border-gray-600">
                      <div 
                        className="h-full bg-cyber-green transition-all duration-1000 ease-out"
                        style={{ 
                          width: loading ? '0%' : `${((stats?.easySolved || 100) / (stats?.easyTotal || 150)) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-cyber-orange">MEDIUM</span>
                      <span className="text-gray-400">
                        {loading ? '...' : `${stats?.mediumSolved || 50}/${stats?.mediumTotal || 120}`}
                      </span>
                    </div>
                    <div className="h-2 bg-cyber-dark border border-gray-600">
                      <div 
                        className="h-full bg-cyber-orange transition-all duration-1000 ease-out"
                        style={{ 
                          width: loading ? '0%' : `${((stats?.mediumSolved || 50) / (stats?.mediumTotal || 120)) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-cyber-pink">HARD</span>
                      <span className="text-gray-400">
                        {loading ? '...' : `${stats?.hardSolved || 20}/${stats?.hardTotal || 80}`}
                      </span>
                    </div>
                    <div className="h-2 bg-cyber-dark border border-gray-600">
                      <div 
                        className="h-full bg-cyber-pink transition-all duration-1000 ease-out"
                        style={{ 
                          width: loading ? '0%' : `${((stats?.hardSolved || 20) / (stats?.hardTotal || 80)) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Panel */}
          <div className="space-y-6 w-full max-w-screen-sm mx-auto md:h-full md:flex md:flex-col md:justify-between">
            <div className="pixel-button border-cyber-blue text-cyber-blue p-6 px-2 md:px-6 w-full">
              <GlitchText className="text-xl mb-4" intensity="low">SKILL MATRIX</GlitchText>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-cyber-green">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-cyber-dark border border-gray-600">
                      <div 
                        className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio Text */}
            <div className="pixel-button border-cyber-green text-white p-6 px-2 md:px-6 w-full">
              <GlitchText className="text-lg text-cyber-green mb-4">
                ABOUT.TXT
              </GlitchText>
              <div className="text-sm leading-relaxed space-y-3">
              <p>
               Passionate full-stack developer with 5+ years of experience building websites, games, and creative digital experiences. Skilled in HTML, CSS, JavaScript, Python, and modern tools like React and Node.js.
              </p>
              <p>
               I’m also a dedicated Roblox animator and scripter, always experimenting with new game ideas and smooth animations. On the side, I draw, make music on my guitar, and love bringing creative ideas to life.
             </p>
            <p>
              Always learning, always building — and yeah, I’m taken 😛
              </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {/* Ensure the file exists at public/files/Res-3.pdf. If not downloading on Netlify, redeploy and check the file path/case. */}
              <a href="" download="1_GOJO.pdf" target="_blank" rel="noopener noreferrer">
                <PixelButton variant="accent" size="md">
                  CV IS WORKING SO BE PATIANT
                </PixelButton>
              </a>
              <PixelButton variant="success" size="md" onClick={() => {
                if (onSectionChange) onSectionChange('contact');
              }}>
                CONTACT
              </PixelButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
