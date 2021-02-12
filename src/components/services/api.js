export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/zombie_avatar_monster_dead-128.png'
        },
        {
          id: 2,
          content: 'Criar um projeto de Gerenciamento interno',
          labels: ['#7159c1'],
          user: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/coffee_zorro_avatar_cup-128.png'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-128.png'
        },
        {
          id: 4,
          content: 'Desenvolver "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-128.png'
        },
        {
          id: 5,
          content: 'Fazer testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://avatars0.githubusercontent.com/u/5524114?s=460&u=b48556a9789ceb634804481715ea57adfd5a5724&v=4://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Desenvolver e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://avatars0.githubusercontent.com/u/5524114?s=460&u=b48556a9789ceb634804481715ea57adfd5a5724&v=4'
        },
        {
          id: 8,
          content: 'Testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars0.githubusercontent.com/u/5524114?s=460&u=b48556a9789ceb634804481715ea57adfd5a5724&v=4'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Desenvolver projeto feito com ReactJS',  //''Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Desenvolver "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}