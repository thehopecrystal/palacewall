import casaJadeWineImage from "@/assets/casa-jade-wine.png.asset.json";
import edoFacesImage from "@/assets/edofaces-radio.png.asset.json";
import kayluvasBrandImage from "@/assets/kayluvas-brand.png.asset.json";
import kayluvasProductImage from "@/assets/kayluvas-products.png.asset.json";
import broadcastingEditorialImage from "@/assets/palacewall-broadcasting-editorial.jpg";
import partnershipsEditorialImage from "@/assets/palacewall-partnerships-editorial.jpg";
import sportsEditorialImage from "@/assets/palacewall-sports-editorial.jpg";

export const navigation = [
  { label: "About", to: "/about" as const },
  { label: "Film & TV", to: "/film-television" as const },
  { label: "Sports", to: "/sports-management" as const },
  { label: "Broadcasting", to: "/broadcasting-digital-media" as const },
  { label: "Consumer brands", to: "/consumer-brands" as const },
  { label: "Affiliates", to: "/affiliates" as const },
  { label: "Partnerships", to: "/partnerships" as const },
  { label: "Newsroom", to: "/newsroom" as const },
  { label: "Contact", to: "/contact" as const },
];

export const contactDetails = {
  email: "info@palacewall.com",
  phone: "+1-416-886-0339",
} as const;

export const businessInterests = [
  {
    number: "01",
    title: "Film & television",
    copy: "Original motion pictures, documentaries, television programming, and digital entertainment.",
    to: "/film-television" as const,
  },
  {
    number: "02",
    title: "Sports management",
    copy: "Talent development, career management, sponsorship, and international sporting relationships.",
    to: "/sports-management" as const,
  },
  {
    number: "03",
    title: "Broadcasting & digital media",
    copy: "Online radio, podcasts, audiovisual programming, cultural conversations, and digital content.",
    to: "/broadcasting-digital-media" as const,
  },
  {
    number: "04",
    title: "Consumer brands",
    copy: "Thoughtful product concepts and distinctive brands for selected consumer markets.",
    to: "/consumer-brands" as const,
  },
  {
    number: "05",
    title: "International business",
    copy: "Exploring strategic relationships that connect Canadian, Nigerian, and international markets.",
    to: "/partnerships" as const,
  },
  {
    number: "06",
    title: "Community development",
    copy: "A commitment to community advancement, humanitarian initiatives, and wider opportunity.",
    to: "/affiliates" as const,
  },
];

export const affiliations = [
  {
    name: "Human Angle Initiatives",
    line: "Humanity. Dignity. Opportunity.",
    copy: "A community-focused, not-for-profit organization dedicated to supporting vulnerable individuals and families, including refugees, asylum seekers, newcomers, and people experiencing housing insecurity.",
  },
  {
    name: "Edo Faces Radio",
    line: "Our heritage. Our voices. Our radio.",
    copy: "A Palacewall brand celebrating Edo heritage through radio and media.",
  },
  {
    name: "Kayluvas",
    line: "Chat. Meet. Date.",
    copy: "A Palacewall brand with a premium latex condom product shown in its supplied imagery.",
  },
  {
    name: "Casa Jade Wine",
    line: "Casa Jade Reserva · Sweet red wine",
    copy: "A Palacewall wine brand represented by the Casa Jade Reserva bottle and label imagery.",
  },
  {
    name: "Palacewall Home Technology",
    line: "Practical innovation for everyday living.",
    copy: "A proposed product line focused on practical household solutions, including the Socket Fanlight concept, currently in development.",
  },
];

export type ContentSection = {
  heading: string;
  items: { title: string; copy: string }[];
  image?: string;
  imageAlt?: string;
};

export type BrandShowcaseItem = {
  name: string;
  tagline: string;
  copy: string;
  website: string;
  href: string;
  image: string;
  imageAlt: string;
  brandMark?: string;
};

export type ContentPage = {
  kicker: string;
  title: string;
  subtitle: string;
  introduction: string[];
  sections: ContentSection[];
  brandShowcase?: BrandShowcaseItem[];
  feature?: { label: string; title: string; copy: string; note?: string };
  closing?: string;
  caution?: string;
};

export const contentPages = {
  about: {
    kicker: "About Palacewall",
    title: "A vision beyond borders.",
    subtitle: "One corporate vision. Multiple business interests.",
    introduction: [
      "Palacewall Media & Entertainment Ltd. is a diversified business enterprise operating through separately incorporated and affiliated corporate entities in Canada and Nigeria.",
      "Our organization was established around a vision of developing creative and commercial opportunities that transcend geographical, cultural, and industrial boundaries.",
      "Although media and entertainment remain central to our corporate identity, our interests extend into sports management, consumer products, brand development, international trade, and community-focused initiatives.",
      "Our presence in Canada and Nigeria reflects a commitment to connecting two important economic and cultural environments while exploring opportunities for wider international engagement.",
    ],
    sections: [
      { heading: "Our direction", items: [
        { title: "Our vision", copy: "To become a respected and internationally recognized diversified enterprise, known for creative excellence, innovative brands, strategic partnerships, and meaningful contributions to economic and social development." },
        { title: "Our mission", copy: "To identify, develop, and support sustainable business opportunities across entertainment, sports, consumer products, and related industries through innovation, professional management, strategic collaboration, and responsible corporate practices." },
      ] },
      { heading: "Our values", items: [
        { title: "Integrity", copy: "Honesty, accountability, and ethical business conduct are essential to lasting professional relationships." },
        { title: "Innovation & excellence", copy: "We encourage original thinking, creative solutions, and high professional standards across our work." },
        { title: "Cultural diversity", copy: "Different cultures, perspectives, experiences, and traditions help shape a more connected global community." },
        { title: "Collaboration", copy: "Strong partnerships create opportunities for shared growth and long-term success." },
        { title: "Social responsibility", copy: "Businesses have an important role to play in supporting communities and contributing positively to society." },
      ] },
      { heading: "Across two markets", items: [
        { title: "Palacewall Canada", copy: "A platform for developing business relationships, creative projects, commercial initiatives, and partnerships within Canada and internationally." },
        { title: "Palacewall Nigeria", copy: "Supports the development of business interests, creative ventures, consumer brands, and commercial opportunities within Nigeria and the wider African market." },
      ] },
    ],
    caution: "The Canadian and Nigerian entities are separately incorporated companies connected through a shared Palacewall corporate identity and business vision.",
  },
  film: {
    kicker: "Palacewall Film & Television",
    title: "Stories that inspire. Productions that connect.",
    subtitle: "A platform for original storytelling and creative collaboration.",
    introduction: [
      "Storytelling is more than entertainment. It can preserve history, celebrate culture, explore human experiences, and connect audiences across generations and geographical boundaries.",
      "Our film and television interests encompass the development and production of original motion pictures, documentaries, television programming, and digital entertainment content.",
      "We are particularly interested in stories that reflect the richness of African history and culture while appealing to audiences in Canada, Africa, and around the world.",
    ],
    sections: [
      { heading: "Production interests", items: [
        { title: "Feature films", copy: "Development of original cinematic productions across drama, historical fiction, action, and other entertainment genres." },
        { title: "Television productions", copy: "Creation and development of scripted and unscripted television programming for diverse audiences." },
        { title: "Documentaries", copy: "Exploration of history, culture, society, personalities, and contemporary issues through factual storytelling." },
        { title: "Digital entertainment", copy: "Original programming for online platforms, streaming services, and emerging digital media channels." },
        { title: "International co-productions", copy: "Exploring opportunities to collaborate with producers, directors, writers, performers, and production companies across international markets." },
      ] },
    ],
    feature: {
      label: "Featured development project",
      title: "The Godfather of Benin City",
      copy: "An original Palacewall film development project exploring power, family, heritage, loyalty, and influence within the cultural and historical environment of Benin City, Nigeria.",
      note: "A development project; further details will be announced as they are confirmed.",
    },
    closing: "We welcome opportunities to explore collaborations with filmmakers, screenwriters, production professionals, creative talent, investors, and distribution partners.",
  },
  sports: {
    kicker: "Palacewall Sports Management",
    title: "Developing talent. Creating opportunities.",
    subtitle: "Connecting people and possibilities across global sports.",
    introduction: [
      "Sports can inspire communities, create economic opportunities, and bring people together across national and cultural boundaries.",
      "Palacewall's sports management interests focus on identifying opportunities within professional sports, supporting emerging talent, and facilitating strategic relationships across the international sporting industry.",
      "Our vision is to contribute to the professional development of athletes and sporting enterprises while promoting opportunities for international exposure and commercial growth.",
    ],
    sections: [
      { heading: "Areas of interest", image: sportsEditorialImage, imageAlt: "Young footballers training together on a Lagos pitch", items: [
        { title: "Athlete development", copy: "Supporting emerging athletes as they develop their skills, pursue professional pathways, and access appropriate training and development resources." },
        { title: "Athlete representation & career management", copy: "Developing professional athlete management and representation services, subject to applicable licensing and sporting regulations." },
        { title: "Sports marketing & sponsorship", copy: "Exploring commercial relationships between athletes, sporting organizations, corporate sponsors, and consumer brands." },
        { title: "International sporting partnerships", copy: "Facilitating opportunities for collaboration among sporting institutions, clubs, academies, and organizations across international markets." },
        { title: "Football development", copy: "A particular interest in football talent development, professional opportunities, and international sporting relationships." },
        { title: "Sports media & entertainment", copy: "Exploring opportunities in sports broadcasting, documentaries, digital content, and related entertainment." },
      ] },
    ],
    caution: "Representation and related professional services are subject to applicable licensing and sporting regulations.",
  },
  media: {
    kicker: "Broadcasting & Digital Media",
    title: "Informing. Entertaining. Connecting audiences.",
    subtitle: "Original media ideas for an increasingly connected world.",
    introduction: [
      "Digital media is shaping public conversations, connecting communities, and creating new opportunities for content producers and audiences.",
      "Our broadcasting and digital media interests include online radio, podcast production, audiovisual programming, interviews, cultural discussions, and original digital entertainment.",
      "We aim to develop platforms that reflect diverse perspectives while encouraging informative, engaging, and responsible communication.",
    ],
    sections: [
      { heading: "Media interests", image: broadcastingEditorialImage, imageAlt: "Edo Faces Radio presenters recording a studio conversation", items: [
        { title: "Online radio", copy: "Internet-based radio programming featuring entertainment, music, cultural discussions, interviews, and community-focused content." },
        { title: "Podcast productions", copy: "Original audio and video podcasts covering society, culture, current affairs, entertainment, business, and other subjects of public interest." },
        { title: "Digital television & video", copy: "Audiovisual programs developed for online audiences and digital distribution platforms." },
        { title: "Interviews & special features", copy: "Conversations with people whose experiences, achievements, and perspectives contribute to public understanding and cultural engagement." },
        { title: "Cultural programming", copy: "Content that celebrates African heritage, international communities, artistic expression, and cross-cultural understanding." },
      ] },
    ],
    feature: { label: "Our objective", title: "Accessible, engaging media.", copy: "To develop platforms that inform audiences, promote cultural awareness, encourage constructive dialogue, and create opportunities for original content production." },
  },
  brands: {
    kicker: "Specialized Products & Consumer Brands",
    title: "Innovative products. Distinctive brands.",
    subtitle: "Exploring selected categories and international markets.",
    introduction: [
      "Palacewall's commercial interests extend into the development, branding, and marketing of specialized consumer products.",
      "Palacewall's brand portfolio brings together consumer products, wine, and media. Explore Kayluvas, Edo Faces Radio, and Casa Jade Wine below.",
    ],
    brandShowcase: [
      {
        name: "Kayluvas",
        tagline: "Chat. Meet. Date.",
        copy: "A Palacewall brand with a premium latex condom product shown in its supplied imagery.",
        website: "kayluvas.com",
        href: "https://kayluvas.com",
        image: kayluvasProductImage.url,
        imageAlt: "Kayluvas premium latex condom packaging",
        brandMark: kayluvasBrandImage.url,
      },
      {
        name: "Edo Faces Radio",
        tagline: "Our heritage. Our voices. Our radio.",
        copy: "A Palacewall media brand celebrating Edo heritage and radio.",
        website: "edofaces.com",
        href: "https://edofaces.com",
        image: edoFacesImage.url,
        imageAlt: "Edo Faces Radio brand artwork",
      },
      {
        name: "Casa Jade Wine",
        tagline: "Casa Jade Reserva · Sweet red wine",
        copy: "A Palacewall wine brand represented by the Casa Jade Reserva bottle and label imagery.",
        website: "casajadewine.com",
        href: "https://casajadewine.com",
        image: casaJadeWineImage.url,
        imageAlt: "Casa Jade Reserva red wine bottle",
      },
    ] satisfies BrandShowcaseItem[],
    sections: [
      { heading: "In development", items: [
        { title: "Palacewall Home Technology", copy: "A proposed product line focused on practical household solutions. The Socket Fanlight concept combines LED lighting and fan functionality for compatible fixtures. Product in development; final specifications and availability will be announced following evaluation." },
      ] },
      { heading: "Product development philosophy", items: [
        { title: "Thoughtful development", copy: "We believe successful consumer brands begin with understanding market needs, product identity, and consumer expectations." },
        { title: "Responsible partnerships", copy: "Our approach emphasizes responsible sourcing, appropriate quality standards, and reliable commercial relationships." },
        { title: "Exploring new markets", copy: "We intend to explore opportunities for product development, manufacturing partnerships, distribution, and commercialization in Canada, Nigeria, and other suitable markets." },
      ] },
    ],
    caution: "Product availability, specifications, regulatory approvals, and licensing depend on the product and market.",
  },
  affiliates: {
    kicker: "Our affiliated organizations",
    title: "Independent enterprises. A common vision.",
    subtitle: "A corporate family spanning business and community interests.",
    introduction: [
      "Palacewall maintains relationships with independently registered and affiliated organizations that operate in different sectors while sharing a commitment to entrepreneurship, innovation, cultural identity, and community development.",
      "These relationships reflect our belief that commercial success and social progress can complement one another.",
    ],
    sections: [
      { heading: "Our corporate family", items: affiliations.map(({ name, line, copy }) => ({ title: name, copy: `${line} ${copy}` })) },
      { heading: "Our approach to affiliation", items: [
        { title: "Distinct responsibilities", copy: "Affiliated organizations and brands may maintain their own registrations, management structures, business activities, and operating responsibilities." },
        { title: "A shared alignment", copy: "Association with Palacewall reflects shared commercial relationships, common interests, or strategic alignment, as applicable to each organization." },
      ] },
    ],
    caution: "Descriptions of affiliation reflect the supplied corporate brief; specific legal relationships should be confirmed before publication.",
  },
  partnerships: {
    kicker: "International Business Development",
    title: "Building bridges between markets.",
    subtitle: "Exploring opportunity across Canada, Nigeria, and beyond.",
    introduction: [
      "With separately incorporated corporate entities in Canada and Nigeria, Palacewall is positioned to explore commercial opportunities connecting North America, Africa, and international markets.",
      "We recognize the importance of international collaboration in creating opportunities for business growth, knowledge exchange, product development, and cultural engagement.",
      "Our international business interests include strategic partnerships, brand development, commercial representation, sourcing relationships, and market expansion.",
    ],
    sections: [
      { heading: "Areas of collaboration", image: partnershipsEditorialImage, imageAlt: "Nigerian and Canadian business professionals meeting in Lagos", items: [
        { title: "Film & entertainment", copy: "Opportunities involving production, co-production, creative development, financing, and content distribution." },
        { title: "Sports industry", copy: "Relationships involving talent development, sporting institutions, professional services, sponsorship, and sports-related commercial activities." },
        { title: "Product development & manufacturing", copy: "Exploring relationships with qualified manufacturers, product developers, packaging specialists, and quality assurance providers." },
        { title: "Distribution & market development", copy: "Building commercial relationships with distributors, retailers, importers, exporters, and other market participants." },
        { title: "Brand partnerships", copy: "Opportunities for co-branding, licensing, strategic collaboration, and the development of new commercial ventures." },
        { title: "Investment & business development", copy: "Exploring commercially viable projects and partnerships aligned with Palacewall's long-term corporate vision." },
      ] },
    ],
    feature: { label: "Why partner with Palacewall?", title: "A cross-cultural perspective.", copy: "Our business interests span multiple industries and connect two important international markets. We bring an entrepreneurial approach and a commitment to professional relationships based on trust, accountability, and shared objectives." },
    closing: "We welcome discussions with organizations and professionals interested in exploring mutually beneficial commercial opportunities.",
  },
  newsroom: {
    kicker: "Palacewall Newsroom",
    title: "Our stories. Our projects. Our progress.",
    subtitle: "Updates from across our businesses, brands, and creative work.",
    introduction: [
      "Stay connected with Palacewall Media & Entertainment Ltd. as we share developments across our businesses, brands, creative productions, and affiliated organizations.",
      "Our newsroom will feature corporate announcements, production updates, product development news, partnership opportunities, and other information relating to our activities in Canada and Nigeria.",
    ],
    sections: [
      { heading: "Featured areas", items: [
        { title: "Corporate announcements", copy: "Updates concerning Palacewall's business activities, organizational developments, and international initiatives." },
        { title: "Film & television projects", copy: "News about productions, creative collaborations, casting opportunities, and entertainment developments." },
        { title: "Sports management", copy: "Information about sports-related initiatives, talent development, and potential industry collaborations." },
        { title: "Consumer brand developments", copy: "Updates on Palacewall-associated brands, proposed product launches, and commercial expansion plans." },
        { title: "Community initiatives", copy: "Stories and developments involving Human Angle Initiatives and other community-focused activities." },
      ] },
    ],
    closing: "We invite business partners, creative professionals, prospective collaborators, and members of the public to follow our corporate developments.",
    caution: "News and project updates will be published as information becomes available.",
  },
  contact: {
    kicker: "Contact Palacewall",
    title: "Let’s connect. Let’s collaborate.",
    subtitle: "Let's build opportunities together.",
    introduction: [
      "Palacewall Media & Entertainment Ltd. welcomes inquiries from business organizations, creative professionals, sports industry participants, product development partners, distributors, investors, and individuals interested in exploring potential collaborations.",
      "Whether your interest involves entertainment production, sports management, consumer brands, or international business opportunities, we welcome professional communication.",
    ],
    sections: [
      { heading: "Our operations", items: [
        { title: "Canada", copy: "Palacewall Media & Entertainment Ltd. Corporate inquiries, business development, entertainment partnerships, and Canadian market opportunities." },
        { title: "Federal Republic of Nigeria", copy: "Palacewall Media & Entertainment Ltd. Nigerian and African market inquiries, creative productions, commercial partnerships, and business development opportunities." },
      ] },
      { heading: "Business inquiry categories", items: [
        { title: "General corporate inquiries", copy: "General questions about Palacewall and its business interests." },
        { title: "Film & television production", copy: "Creative collaborations, production, and distribution discussions." },
        { title: "Sports management", copy: "Sports-related initiatives and potential industry collaborations." },
        { title: "Consumer brands & distribution", copy: "Product development, brand, and distribution opportunities." },
        { title: "Business development & partnerships", copy: "Commercial relationships connecting Canada, Nigeria, and other markets." },
        { title: "Media, public relations & community", copy: "Media inquiries and community-focused initiatives." },
      ] },
    ],
    feature: { label: "General inquiries", title: "Official contact details", copy: `Website: www.palacewall.com\nEmail: ${contactDetails.email}\nTelephone: ${contactDetails.phone}\nCanadian office address: To be published\nNigerian office address: To be published` },
    closing: "We look forward to exploring opportunities for professional collaboration.",
    caution: "Telephone and office address details are to be published.",
  },
} satisfies Record<string, ContentPage>;