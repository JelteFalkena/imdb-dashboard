-- Eenmalig draaien (optioneel — de app maakt de tabel ook automatisch aan)
USE imdb_project;

CREATE TABLE IF NOT EXISTS genre_stats (
  genre_id INT NOT NULL PRIMARY KEY,
  title_count INT NOT NULL DEFAULT 0,
  avg_net_profit DECIMAL(18, 2) NOT NULL DEFAULT 0,
  avg_margin_pct DECIMAL(8, 2) NOT NULL DEFAULT 0,
  updated_at DATETIME NOT NULL,
  CONSTRAINT fk_genre_stats_genre
    FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);
