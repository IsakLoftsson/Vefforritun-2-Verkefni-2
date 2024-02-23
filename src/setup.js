import { query } from './lib/db.js';

async function main() {
  const games = await query('select * from games');

  // eslint-disable-next-line no-console
  console.log(games);
}

main().catch((e) => console.error(e));
