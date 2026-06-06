import { refreshGenreStats, fetchGenreStats } from '../lib/genre-stats';

async function main() {
  console.log('Genre stats verversen...');
  await refreshGenreStats();
  const stats = await fetchGenreStats();
  const active = stats.filter((g) => g.titleCount > 0).length;
  console.log(`Klaar: ${active} genres met gemiddelde winst berekend.`);
}

main().catch((error) => {
  console.error('Fout bij verversen genre stats:', error);
  process.exit(1);
});
