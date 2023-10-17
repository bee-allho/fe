export enum FIRST_PATH {
  admin = 'Admin' /* 어드민 */,
  database = 'Database' /* 데이터베이스 */,
  workspace = 'Workspace' /* 워크스페이스 */,
  report = 'Report' /* 레포트 */,
}

export enum SECOND_PATH {
  // admin
  role = 'Role Management',
  user = 'User Management',
  decision = 'Decision Participants Management',
  // database
  ver = 'Aircraft Ver Management',
  aircraft = 'Aircraft Management',
  airport = 'Airport Management',
  ndb = 'NDB Management',
  fir = 'FIR Management',
  citypair = 'Citypair Management',
  dss = 'DSS Checklist',
  notice = 'Notice',
  address = 'Address Management',
  fpldefault = 'FPL Default NOTE Management',
  fplaircraft = 'FPL Aircraft NOTE Management',
  fplairport = 'FPL Airport NOTE Management',
  fplflight = 'FPL Flight NOTE Management',
  fplroute = 'FPL Route NOTE Management',
  master = 'Master Checklist',
  //workspace
  skd = 'AC SKD',
  fc = 'Flight Control',
  notam = 'NOTAM',
  fm = 'Flight Manager',
  om = 'Operation Manager',
  //report
  irops = 'IROPS Report',
  daily = 'Daily Checklist',
}
