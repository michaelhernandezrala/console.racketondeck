import {
  BarChart,
  DisabledByDefault,
  Event,
  Forum,
  Group,
  HelpCenter,
  Home,
  InsertEmoticon,
  Newspaper,
  SportsTennis,
} from '@mui/icons-material';

const menuDrawer = [
  {
    id: 1,
    section: 'Dashboard',
    items: [{ id: 1, label: 'Dashboard', icon: <Home /> }],
  },
  {
    id: 2,
    section: 'Usuarios',
    items: [
      { id: 1, label: 'Staff', icon: <Group /> },
      { id: 2, label: 'Players', icon: <InsertEmoticon /> },
    ],
  },
  {
    id: 3,
    section: 'Pistas',
    items: [
      { id: 1, label: 'Pistas', icon: <SportsTennis /> },
      { id: 2, label: 'Reservas', icon: <Event /> },
    ],
  },
  {
    id: 4,
    section: 'Estadísticas',
    items: [{ id: 1, label: 'Reportes', icon: <BarChart /> }],
  },
  {
    id: 5,
    section: 'Community',
    items: [
      { id: 1, label: 'Foros', icon: <Forum /> },
      { id: 2, label: 'Noticias', icon: <Newspaper /> },
      { id: 3, label: 'Objetos perdidos', icon: <DisabledByDefault /> },
    ],
  },
  {
    id: 6,
    section: 'Soporte',
    items: [{ id: 1, label: 'Ayuda', icon: <HelpCenter /> }],
  },
];

export default menuDrawer;
