import React from 'react';
import { Youtube, Mail, Newspaper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import musixmatchLogo from '@/assets/musixmatch-logo.png';
import bandcampLogo from '@/assets/bandcamp-logo.png';
import spotifyLogo from '@/assets/spotify-logo.png';
import appleMusicLogo from '@/assets/apple-music-logo.svg';
import youtubeLogo from '@/assets/youtube-logo.png';
import amazonMusicLogo from '@/assets/amazon-music-logo.png';
import tidalLogo from '@/assets/tidal-logo.png';
import pandoraLogo from '@/assets/pandora-logo.png';
import deezerLogo from '@/assets/deezer-logo.png';
import iheartradioLogo from '@/assets/iheartradio-logo.png';
import qobuzLogo from '@/assets/qobuz-logo.png';
import soundcloudLogo from '@/assets/soundcloud-logo.png';

export const Releases: React.FC = () => {
  const availableNowPlatforms = [
    {
      src: amazonMusicLogo,
      alt: "Amazon Music platform logo",
      href: "https://music.amazon.com/artists/B0FV4TVBRB/shannon-mcharg",
      name: "Amazon Music"
    },
    {
      src: appleMusicLogo,
      alt: "Apple Music platform logo",
      href: "https://music.apple.com/us/artist/shannon-mcharg/1844698992",
      name: "Apple Music"
    },
    {
      src: bandcampLogo,
      alt: "Bandcamp platform logo",
      href: "https://shannonmcharg.bandcamp.com/",
      name: "Bandcamp"
    },
    {
      src: deezerLogo,
      alt: "Deezer music streaming platform logo",
      href: "https://www.deezer.com/us/artist/349913012",
      name: "Deezer"
    },
    {
      src: iheartradioLogo,
      alt: "iHeart Radio music streaming platform logo",
      href: "https://www.iheart.com/artist/shannon-mcharg-48243953/",
      name: "iHeart Radio"
    },
    {
      src: pandoraLogo,
      alt: "Pandora music streaming platform logo",
      href: "https://www.pandora.com/artist/shannon-mcharg/ARthXx7797ZX5fK",
      name: "Pandora",
      holidayHref: "https://www.pandora.com/artist/shannon-mcharg-holiday/ARJz9f2z4V5P4b2"
    },
    {
      src: qobuzLogo,
      alt: "Qobuz music streaming platform logo",
      href: "https://play.qobuz.com/artist/28857460",
      name: "Qobuz"
    },
    {
      src: soundcloudLogo,
      alt: "SoundCloud music streaming platform logo",
      href: "https://soundcloud.com/shannon-mcharg-songwriter",
      name: "SoundCloud"
    },
    {
      src: spotifyLogo,
      alt: "Spotify music streaming platform logo",
      href: "https://open.spotify.com/artist/6JUDGvBQiLagw4rt8Gb9ct?si=BUe2A0UGQYmeuY00msZWhQ",
      name: "Spotify"
    },
    {
      src: tidalLogo,
      alt: "Tidal music streaming platform logo",
      href: "https://tidal.com/artist/67993245",
      name: "Tidal"
    },
    {
      src: youtubeLogo,
      alt: "YouTube music platform logo",
      href: "https://music.youtube.com/channel/UCCZrRcE-indAPT6rVBaTDmA?si=GSF_LU_6-LyfdmWh",
      name: "YouTube"
    }
  ];

  const connectLinks = [
    {
      href: "https://buttondown.com/shannonmchargsongs",
      label: "Newsletter",
      icon: <Newspaper className="w-full h-full text-foreground" />,
      ariaLabel: "Subscribe to Shannon's newsletter"
    },
    {
      href: "https://www.instagram.com/shannonmchargsongs/",
      label: "Instagram",
      icon: <img src="https://api.builder.io/api/v1/image/assets/TEMP/de92c4b0cf657c343fd805205fc6bc6a90761783?placeholderIfAbsent=true" alt="" className="w-full h-full object-contain" role="presentation" />,
      ariaLabel: "Follow Shannon on Instagram"
    },
    {
      href: "https://www.tiktok.com/@shannonmchargsongs",
      label: "TikTok",
      icon: <img src="https://api.builder.io/api/v1/image/assets/TEMP/7c7882428c644b092335250bd4a53dfd25e3453a?placeholderIfAbsent=true" alt="" className="w-full h-full object-contain" role="presentation" />,
      ariaLabel: "Follow Shannon on TikTok"
    },
    {
      href: "https://www.youtube.com/@shannonmchargsongs",
      label: "YouTube",
      icon: <img src={youtubeLogo} alt="" className="w-full h-full object-contain" role="presentation" />,
      ariaLabel: "Follow Shannon on YouTube"
    },
    {
      href: "https://bsky.app/profile/shannonmchargsongs.bsky.social",
      label: "Bluesky",
      icon: <img src="https://api.builder.io/api/v1/image/assets/TEMP/a21a4a86570f9f064e8dd8b720171af437391f9c?placeholderIfAbsent=true" alt="" className="w-full h-full object-contain" role="presentation" />,
      ariaLabel: "Follow Shannon on Bluesky"
    },
    {
      href: "https://www.facebook.com/shannonmchargsongs",
      label: "Facebook",
      icon: <img src="https://api.builder.io/api/v1/image/assets/TEMP/f38b20d9602b2855e512dd211e924120bf18c9ef?placeholderIfAbsent=true" alt="" className="w-full h-full object-contain" role="presentation" />,
      ariaLabel: "Follow Shannon on Facebook"
    },
    {
      href: "mailto:shannonmchargsongwriter@gmail.com",
      label: "Email Me",
      icon: <Mail className="w-full h-full text-foreground" />,
      ariaLabel: "Email Shannon"
    }
  ];

  return (
    <section 
      id="releases" 
      className="bg-background py-4 sm:py-6 lg:py-8 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8"
      aria-labelledby="releases-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="releases-heading"
          className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 sm:mb-8 lg:mb-10 relative text-left"
        >
          Music
          <div className="absolute -bottom-4 left-0 w-16 h-1 bg-primary rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Uncoupled</h3>
              <iframe
                data-testid="embed-iframe"
                style={{ border: 0, width: '100%', height: '452px' }}
                src="https://open.spotify.com/embed/album/50jJbctL66mNarb8nWaIr1?utm_source=generator"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Uncoupled by Shannon McHarg on Spotify"
              >
                <a href="https://open.spotify.com/album/50jJbctL66mNarb8nWaIr1">Uncoupled by Shannon McHarg</a>
              </iframe>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="https://www.musixmatch.com/album/Shannon-McHarg-9/Uncoupled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <img
                    src={musixmatchLogo}
                    alt="Musixmatch logo"
                    className="w-6 h-6 object-contain brightness-0"
                  />
                  <span className="text-foreground text-sm font-medium">Uncoupled lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=0oscu1_MgFk&list=PLGdgwLoxFZ_Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm font-medium">Uncoupled videos</span>
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Consumed</h3>
              <iframe
                data-testid="embed-iframe"
                style={{ border: 0, width: '100%', height: '452px' }}
                src="https://open.spotify.com/embed/album/4v5oatFkTHBGJ5GLkLHDGC?utm_source=generator"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Consumed by Shannon McHarg on Spotify"
              >
                <a href="https://open.spotify.com/album/4v5oatFkTHBGJ5GLkLHDGC">Consumed by Shannon McHarg</a>
              </iframe>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="https://www.musixmatch.com/album/Shannon-McHarg-8/Consumed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <img
                    src={musixmatchLogo}
                    alt="Musixmatch logo"
                    className="w-6 h-6 object-contain brightness-0"
                  />
                  <span className="text-foreground text-sm font-medium">Consumed lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-nok7dkRCoQn04F7TzMd9fA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm font-medium">Consumed videos</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">False Choices</h3>
              <iframe
                data-testid="embed-iframe"
                style={{ border: 0, width: '100%', height: '452px' }}
                src="https://open.spotify.com/embed/album/148X2H2K9zz1p237Oj9FiH?utm_source=generator"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="False Choices by Shannon McHarg on Spotify"
              >
                <a href="https://open.spotify.com/album/148X2H2K9zz1p237Oj9FiH">False Choices by Shannon McHarg</a>
              </iframe>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="https://www.musixmatch.com/album/Shannon-McHarg-4/False-Choices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <img
                    src={musixmatchLogo}
                    alt="Musixmatch logo"
                    className="w-6 h-6 object-contain brightness-0"
                  />
                  <span className="text-foreground text-sm font-medium">False Choices lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-moJ1Q3keeS7EcaO37Q_lmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm font-medium">False Choices videos</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Forked</h3>
              <iframe
                data-testid="embed-iframe"
                style={{ border: 0, width: '100%', height: '452px' }}
                src="https://open.spotify.com/embed/album/4BY25qKPO4IvpJQNJBZSbt?utm_source=generator"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Forked by Shannon McHarg on Spotify"
              >
                <a href="https://open.spotify.com/album/4BY25qKPO4IvpJQNJBZSbt">Forked by Shannon McHarg</a>
              </iframe>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="https://www.musixmatch.com/album/Shannon-McHarg-1/Forked"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <img
                    src={musixmatchLogo}
                    alt="Musixmatch logo"
                    className="w-6 h-6 object-contain brightness-0"
                  />
                  <span className="text-foreground text-sm font-medium">Forked lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-kuLUlidVartJ174vCngh6r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm font-medium">Forked videos</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Holidaze Pie</h3>
              <iframe
                data-testid="embed-iframe"
                style={{ border: 0, width: '100%', height: '452px' }}
                src="https://open.spotify.com/embed/album/7ii95Ab1L61yEfAw52cIwL?utm_source=generator"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Holidaze Pie by Shannon McHarg on Spotify"
              >
                <a href="https://open.spotify.com/album/7ii95Ab1L61yEfAw52cIwL">Holidaze Pie by Shannon McHarg</a>
              </iframe>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="https://www.musixmatch.com/album/Shannon-McHarg/Holidaze-Pie-EP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <img
                    src={musixmatchLogo}
                    alt="Musixmatch logo"
                    className="w-6 h-6 object-contain brightness-0"
                  />
                  <span className="text-foreground text-sm font-medium">Holidaze Pie lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-kZdEqWSE86048ZxWvCJzYf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm font-medium">Holidaze Pie videos</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Plastic Cuppa Fall</h3>
              <iframe
                data-testid="embed-iframe"
                style={{ border: 0, width: '100%', height: '452px' }}
                src="https://open.spotify.com/embed/album/56DFiwDg7cMfJS3kSk1eBg?utm_source=generator"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Plastic Cuppa Fall by Shannon McHarg on Spotify"
              >
                <a href="https://open.spotify.com/album/56DFiwDg7cMfJS3kSk1eBg">Plastic Cuppa Fall by Shannon McHarg</a>
              </iframe>
              <div className="flex flex-col gap-2 mt-3">
                <a
                  href="https://www.musixmatch.com/album/Shannon-McHarg/Plastic-Cuppa-Fall-Single"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <img
                    src={musixmatchLogo}
                    alt="Musixmatch logo"
                    className="w-6 h-6 object-contain brightness-0"
                  />
                  <span className="text-foreground text-sm font-medium">Plastic Cuppa Fall lyrics</span>
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLgEDGGuOvK-naIiuRdTXk00-nZfz22J-Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity underline"
                >
                  <Youtube className="w-6 h-6 text-foreground" />
                  <span className="text-foreground text-sm font-medium">Plastic Cuppa Fall videos</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm md:col-span-2 lg:col-span-3">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Stream my Music</h3>
              <p className="text-foreground text-sm mb-6">
                My artist page on your favorite streaming platforms.
              </p>
              
              <nav aria-label="Streaming platform links">
                <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8">
                  {availableNowPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Listen to Shannon on ${platform.name}`}
                      className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                    >
                      <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                        <img
                          src={platform.src}
                          alt=""
                          className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                          role="presentation"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{platform.name}</span>
                    </a>
                  ))}
                </div>
              </nav>

              <p className="text-foreground text-xs mt-6">
                Don't see your favorite platform?{' '}
                <a 
                  href="https://cdbaby.com/music-distribution/digital-distribution-partners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                >
                  Full list of platforms
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm md:col-span-2 lg:col-span-3">
            <CardContent className="p-6">
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mb-4 text-left">Connect with Me</h3>
              <nav aria-label="Social media links">
                <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8">
                  {connectLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                    >
                      <div className="p-2 sm:p-3 rounded-full bg-accent/30 hover:bg-accent transition-all duration-300 group-hover:scale-110">
                        <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{link.label}</span>
                    </a>
                  ))}
                </div>
              </nav>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
