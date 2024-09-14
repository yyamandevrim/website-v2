type Social = {
    label: string;
    link: string;
  };
  type Stack = {
    label: string;
    link: string;
  };
  
  type Yaman = {
    mail: string;
    title: string;
    description: string;
    socials: Social[];
    stacks: Stack[];
  };
  
  const yaman: Yaman = {
    mail: 'yaman@devrim.biz.tr',
    title: "Hello, it's Yaman",
    description:
      "Hi there, I'm Yaman Devrim, a *frontend developer* and a *graphic designer*. I'm a highschooler at Bahcesehir HS for Science and Tech. I love *building cool stuff*.",
    socials: [

      {
        label: 'Instagram',
        link: 'https://instagram.com/yamandvrm',
      },
      {
        label: 'Github',
        link: 'https://github.com/yyamandevrim',
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/yyamandevrim',
      },
    ],
    stacks: [
    {
        label: 'TypeScript',
        link: 'https://img.icons8.com/color/35/c-plus-plus-logo.png',
    },
      {
        label: 'Astro',
        link: 'https://img.icons8.com/?size=35&id=lckHFUP7nJhG&format=png&color=000000',
      },
      {
        label: 'Node',
        link: 'https://img.icons8.com/color/35/nodejs.png',
      },
      {
        label: 'C++',
        link: 'https://img.icons8.com/color/35/c-plus-plus-logo.png',
      },
      {
        label: 'MongoDB',
        link: 'https://img.icons8.com/color/35/mongodb.png',
      },
      {
        label: 'Photoshop',
        link: 'https://img.icons8.com/?size=35&id=Cy4DRjeYKjRa&format=png&color=000000',
      },
      {
        label: 'Illustrator',
        link: 'https://img.icons8.com/color/32/adobe-illustrator.png',
      },
    ],
  };
  
  export default yaman;
  