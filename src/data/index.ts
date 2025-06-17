import { Testimonial, Service, Sport, GalleryItem, BeforeAfter } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Élise Rodriguez",
    sport: "Gymnastique Artistique",
    quote: "Les justaucorps ont dépassé toutes mes attentes. Le design a parfaitement capturé l'essence de ma routine et la qualité est exceptionnelle.",
    image: "https://images.pexels.com/photos/8964915/pexels-photo-8964915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Sophie Martin",
    sport: "Patinage Artistique",
    quote: "Chaque détail est pensé avec précision. La tenue n'est pas seulement belle, elle s'adapte parfaitement à mes mouvements.",
    image: "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Laura Girard",
    sport: "Natation Synchronisée",
    quote: "Incroyable comment ils ont transformé mon idée en un design si élégant et fonctionnel. L'attention aux détails est impressionnante.",
    image: "https://images.pexels.com/photos/7990508/pexels-photo-7990508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: {
      fr: "Design Sur Mesure",
      en: "Custom Design",
      uk: "Індивідуальний Дизайн"
    },
    description: {
      fr: "Nous créons des designs uniques adaptés à votre musique, votre routine et votre personnalité. Chaque pièce reflète votre essence et améliore votre performance.",
      en: "We create unique designs adapted to your music, routine, and personality. Each piece reflects your essence and enhances your performance.",
      uk: "Ми створюємо унікальні дизайни, адаптовані до вашої музики, програми та особистості. Кожен виріб відображає вашу сутність і покращує ваш виступ."
    },
    icon: "pencil"
  },
  {
    id: 2,
    title: {
      fr: "Sélection des Matériaux",
      en: "Material Selection",
      uk: "Підбір Матеріалів"
    },
    description: {
      fr: "Nous travaillons avec des tissus et accessoires haut de gamme, vous conseillant sur l'élasticité, la texture et les finitions pour obtenir des résultats optimaux.",
      en: "We work with premium fabrics and accessories, advising you on elasticity, texture, and finishes to achieve optimal results.",
      uk: "Ми працюємо з преміальними тканинами та аксесуарами, консультуючи вас щодо еластичності, текстури та обробки для досягнення оптимальних результатів."
    },
    icon: "scissors"
  },
  {
    id: 3,
    title: {
      fr: "Artisanat Haute Couture",
      en: "Haute Couture Craftsmanship",
      uk: "Майстерність Від-Кутюр"
    },
    description: {
      fr: "Chaque pièce est confectionnée avec une précision millimétrique, assurant un ajustement parfait et durable qui bouge avec vous.",
      en: "Each piece is crafted with millimeter precision, ensuring a perfect and durable fit that moves with you.",
      uk: "Кожен виріб створюється з міліметровою точністю, забезпечуючи ідеальну та довговічну посадку, яка рухається разом з вами."
    },
    icon: "needle"
  }
];

export const sports: Sport[] = [
  {
    id: 1,
    name: "Gymnastique Artistique",
    description: "Des designs élégants qui soulignent la grâce et la puissance de chaque mouvement gymnique.",
    icon: "medal"
  },
  {
    id: 2,
    name: "Patinage Artistique",
    description: "Des tenues qui complètent la fluidité du patinage avec des détails qui brillent sur la glace.",
    icon: "snowflake"
  },
  {
    id: 3,
    name: "Natation Synchronisée",
    description: "Des designs résistants à l'eau avec des effets visuels époustouflants sous les lumières aquatiques.",
    icon: "droplet"
  },
  {
    id: 4,
    name: "Gymnastique Rythmique",
    description: "Des justaucorps qui améliorent l'expressivité et s'intègrent parfaitement avec chaque appareil.",
    icon: "ribbon"
  },
  {
    id: 5,
    name: "Danse Sportive",
    description: "Des créations qui améliorent le mouvement et ajoutent du drame à chaque pas de danse.",
    icon: "music"
  },
  {
    id: 6,
    name: "Gymnastique à la Roue",
    description: "Des designs durables et flexibles pour les exigences des acrobaties complexes.",
    icon: "circle"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Anna Bessonova ",
    description: " L'équipe nationale d'Ukraine.",
    image: "https://www.aourika.com/images/image_1.jpg",
    sport: "Gymnastique Rythmique",
    featured: true
  },
  {
    id: 2,
    title: "Liza Pereverzeva",
    description: "Photo by Pierre Fleischmann",
    image: "https://www.aourika.com/images/image_2.jpg",
    sport: "Gymnastique Rythmique",
    featured: true
  },
  {
    id: 3,
    title: "Anna Bessonova",
    description: "Photo by John Theobald",
    image: "https://www.aourika.com/images/image_3.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 4,
    title: "Kséniya Moustafaeva",
    description: "L'équipe de France.",
    image: "https://www.aourika.com/images/image_4.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 5,
    title: "Kséniya Moustafaeva ",
    description: " L'équipe de France.",
    image: "https://www.aourika.com/images/image_5.jpg",
    sport: "Gymnastique Rythmique",
    featured: true
  },
  {
    id: 6,
    title: "Liza Pereverzeva",
    description: "Dress designed by Aurika Luka",
    image: "https://www.aourika.com/images/image_6.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 7,
    title: "Agathe Dumm ",
    description: "France.",
    image: "https://www.aourika.com/images/image_7.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 8,
    title: "Marine Letul",
    description: "Photo by Olivier Aubrais",
    image: "https://www.aourika.com/images/image_8.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 9,
    title: "Voltige en cercle",
    description: "France.",
    image: "https://www.aourika.com/images/image_9.jpg",
    sport: "Gymnastique à la Roue",
    featured: true
  },
  {
    id: 10,
    title: "Marine Letul",
    description: "Photo by Fa Buleux",
    image: "https://www.aourika.com/images/image_10.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 11,
    title: "Juni Marie Benjaminsen",
    description: "Norwegian elite.",
    image: "https://www.aourika.com/images/image_11.jpg",
    sport: "Patinage Artistique",
    featured: true
  },
  {
    id: 12,
    title: "Patinage artistique",
    description: "Dress designed by Aurika Luka",
    image: "https://www.aourika.com/images/image_12.jpg",
    sport: "Patinage Artistique"
  },
  {
    id: 13,
    title: "Nataliia Godunko ",
    description: " L'équipe nationale d'Ukraine.",
    image: "https://www.aourika.com/images/image_13.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 14,
    title: "Marine Letul",
    description: "Photo by Fa Buleux",
    image: "https://www.aourika.com/images/image_14.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 15,
    title: "Kséniya Moustafaeva ",
    description: " L'équipe de France.",
    image: "https://www.aourika.com/images/image_15.jpg",
    sport: "Gymnastique Rythmique",
    featured: true
  },
  {
    id: 16,
    title: "Marine Letul",
    description: "Photo by Cybile C.",
    image: "https://www.aourika.com/images/image_16.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 17,
    title: "Mykhailo Rudkovskyi",
    description: "L'équipe nationale d'Ukraine.",
    image: "https://www.aourika.com/images/image_17.jpg",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 18,
    title: "Nataliia Godunko",
    description: "L'équipe nationale d'Ukraine.",
    image: "https://www.aourika.com/images/image_18.jpg",
    sport: "Gymnastique Rythmique"
  }
];

export const beforeAfterItems: BeforeAfter[] = [
  {
    id: 1,
    title: {
      fr: "De l'Esquisse au Chef-d'œuvre",
      en: "From Sketch to Masterpiece",
      uk: "Від Ескізу до Шедевру"
    },
    description: {
      fr: "Où la précision rencontre l'élégance.",
      en: "Where precision meets elegance.",
      uk: "Де точність зустрічається з елегантністю."
    },
    beforeImage: "https://i.imgur.com/mEsQKjD.jpeg",
    afterImage: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/499147480_1382241532845388_2961286809153674634_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NXOb_3uM4-EQ7kNvwE5ZV02&_nc_oc=AdlSP8dpGojxq_Sw7fJ9Io2dUAXQgRnWIQcHe_6yMdewJ6a2tlxZhiO1XqD-2h1Xk5uOvieYB6j1b9_m1zfU4wjF&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=NtMljva_VCIc8pMAtLROPA&oh=00_AfJb5HvpOU30X6TrtkMEgw3Cw-NF2Mo1ODYi3I95QMe8XQ&oe=683B6EA4",
    sport: "Gymnastique Rythmique"
  },
  {
    id: 2,
    title: {
      fr: "Vision Cristallisée",
      en: "Crystallized Vision",
      uk: "Кристалізоване Бачення"
    },
    description: {
      fr: "D'un design numérique basique à une œuvre d'art avec plus de 3 000 cristaux appliqués à la main.",
      en: "From a basic digital design to a work of art with over 3,000 hand-applied crystals.",
      uk: "Від базового цифрового дизайну до витвору мистецтва з понад 3 000 кристалів, нанесених вручну."
    },
    beforeImage: "https://i.imgur.com/TnlRBbW.jpeg",
    afterImage: "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/493561712_3119975101494096_4400167193136742379_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=TTJ3_jXUUKcQ7kNvwE7fJCT&_nc_oc=Admh4UimrhxAmdv6DTw5BUMhcY7VSqZpVfeO6WVV-hruQXbKJFvRF8oGEn04jB2zG4EkpWcmxUiibdoEwzkVfb46&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=e6Nv4nk_F-GTvNZXDR5wCQ&oh=00_AfImzwZIzaDfiV1282tFe6D2iOp8kD4f3wlN1ObYQO6hsA&oe=683B59B6",
    sport: "Patinage Artistique"
  },
  {
    id: 3,
    title: {
      fr: "Idée Aquatique",
      en: "Aquatic Idea",
      uk: "Водна Ідея"
    },
    description: {
      fr: "Évolution d'un concept simple à une tenue résistante à l'eau avec des effets visuels dynamiques.",
      en: "Evolution from a simple concept to a water-resistant outfit with dynamic visual effects.",
      uk: "Еволюція від простої концепції до водостійкого костюма з динамічними візуальними ефектами."
    },
    beforeImage: "https://i.imgur.com/r0zmSxd.jpeg",
    afterImage: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/462106558_2909417305883211_2985306232612288705_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K2EqffmcxukQ7kNvwGOCalP&_nc_oc=AdnesHxJjyz8PE-L6pC04h6dTRAGhHveZ9ogY7yqQq9WXZdER8JCpd4WX8J_2YnzSwo7DsuriZBoxs7x2iPKaTTY&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=OGcMS9J98dLY1pokJxIUew&oh=00_AfKMOF174lUhjzIxMAUGJTJ76eYFmB1taizfbrQ50yHVHQ&oe=683B7282",
    sport: "Natation Synchronisée"
  }
];