const teamsData = [
   {
      "name": "Bayern Munich",
      "league": "German Bundesliga",
      "rank": 1,
      "prev_rank": 2,
      "off": 3.3,
      "def": 0.4,
      "spi": 93.1
   },
   {
      "name": "Real Madrid",
      "league": "Spanish Primera Division",
      "rank": 2,
      "prev_rank": 3,
      "off": 3.7,
      "def": 0.6,
      "spi": 92.5
   },
   {
      "name": "Barcelona",
      "league": "Spanish Primera Division",
      "rank": 3,
      "prev_rank": 1,
      "off": 3.1,
      "def": 0.4,
      "spi": 92.1
   },
   {
      "name": "Manchester City",
      "league": "Barclays Premier League",
      "rank": 4,
      "prev_rank": 4,
      "off": 2.9,
      "def": 0.5,
      "spi": 89.5
   },
   {
      "name": "Liverpool",
      "league": "Barclays Premier League",
      "rank": 5,
      "prev_rank": 6,
      "off": 2.9,
      "def": 0.5,
      "spi": 89.2
   },
   {
      "name": "Paris Saint-Germain",
      "league": "French Ligue 1",
      "rank": 6,
      "prev_rank": 5,
      "off": 3,
      "def": 0.6,
      "spi": 89
   },
   {
      "name": "Juventus",
      "league": "Italy Serie A",
      "rank": 7,
      "prev_rank": 8,
      "off": 2.5,
      "def": 0.4,
      "spi": 87.2
   },
   {
      "name": "Tottenham Hotspur",
      "league": "Barclays Premier League",
      "rank": 8,
      "prev_rank": 7,
      "off": 2.7,
      "def": 0.5,
      "spi": 86.9
   },
   {
      "name": "Atletico Madrid",
      "league": "Spanish Primera Division",
      "rank": 9,
      "prev_rank": 9,
      "off": 2.3,
      "def": 0.4,
      "spi": 85.6
   },
   {
      "name": "Napoli",
      "league": "Italy Serie A",
      "rank": 10,
      "prev_rank": 10,
      "off": 2.4,
      "def": 0.5,
      "spi": 82.9
   },
   {
      "name": "Arsenal",
      "league": "Barclays Premier League",
      "rank": 11,
      "prev_rank": 11,
      "off": 2.8,
      "def": 0.9,
      "spi": 80.5
   },
   {
      "name": "AS Roma",
      "league": "Italy Serie A",
      "rank": 12,
      "prev_rank": 13,
      "off": 2.3,
      "def": 0.6,
      "spi": 80.2
   },
   {
      "name": "Chelsea",
      "league": "Barclays Premier League",
      "rank": 13,
      "prev_rank": 12,
      "off": 2.4,
      "def": 0.7,
      "spi": 80
   },
   {
      "name": "Manchester United",
      "league": "Barclays Premier League",
      "rank": 14,
      "prev_rank": 14,
      "off": 2.4,
      "def": 0.7,
      "spi": 79.9
   },
   {
      "name": "Bayer Leverkusen",
      "league": "German Bundesliga",
      "rank": 15,
      "prev_rank": 21,
      "off": 2.3,
      "def": 0.7,
      "spi": 78.2
   },
   {
      "name": "Benfica",
      "league": "Portuguese Liga",
      "rank": 16,
      "prev_rank": 15,
      "off": 2.2,
      "def": 0.7,
      "spi": 78.1
   },
   {
      "name": "Borussia Dortmund",
      "league": "German Bundesliga",
      "rank": 17,
      "prev_rank": 19,
      "off": 2.4,
      "def": 0.8,
      "spi": 78
   },
   {
      "name": "FC Porto",
      "league": "Portuguese Liga",
      "rank": 18,
      "prev_rank": 16,
      "off": 2.3,
      "def": 0.7,
      "spi": 77.7
   },
   {
      "name": "Valencia",
      "league": "Spanish Primera Division",
      "rank": 19,
      "prev_rank": 17,
      "off": 2.1,
      "def": 0.7,
      "spi": 76.9
   },
   {
      "name": "Marseille",
      "league": "French Ligue 1",
      "rank": 20,
      "prev_rank": 23,
      "off": 2.2,
      "def": 0.7,
      "spi": 76.6
   },
   {
      "name": "Lazio",
      "league": "Italy Serie A",
      "rank": 21,
      "prev_rank": 18,
      "off": 2.4,
      "def": 0.9,
      "spi": 76.5
   },
   {
      "name": "Internazionale",
      "league": "Italy Serie A",
      "rank": 22,
      "prev_rank": 20,
      "off": 2.1,
      "def": 0.7,
      "spi": 76.3
   },
   {
      "name": "Real Sociedad",
      "league": "Spanish Primera Division",
      "rank": 23,
      "prev_rank": 30,
      "off": 2.3,
      "def": 0.8,
      "spi": 76.2
   },
   {
      "name": "Lyon",
      "league": "French Ligue 1",
      "rank": 24,
      "prev_rank": 28,
      "off": 2.2,
      "def": 0.7,
      "spi": 75.9
   },
   {
      "name": "Atalanta",
      "league": "Italy Serie A",
      "rank": 25,
      "prev_rank": 24,
      "off": 2.1,
      "def": 0.7,
      "spi": 75.7
   },
   {
      "name": "AS Monaco",
      "league": "French Ligue 1",
      "rank": 26,
      "prev_rank": 26,
      "off": 2.3,
      "def": 0.9,
      "spi": 74.4
   },
   {
      "name": "Schalke 04",
      "league": "German Bundesliga",
      "rank": 27,
      "prev_rank": 22,
      "off": 2,
      "def": 0.7,
      "spi": 74.3
   },
   {
      "name": "TSG Hoffenheim",
      "league": "German Bundesliga",
      "rank": 28,
      "prev_rank": 27,
      "off": 2.2,
      "def": 0.9,
      "spi": 74.1
   },
   {
      "name": "Shakhtar Donetsk",
      "league": "UEFA Champions League",
      "rank": 29,
      "prev_rank": 31,
      "off": 2.2,
      "def": 0.8,
      "spi": 73.6
   },
   {
      "name": "Sevilla FC",
      "league": "Spanish Primera Division",
      "rank": 30,
      "prev_rank": 29,
      "off": 2.2,
      "def": 0.9,
      "spi": 73.2
   },
   {
      "name": "Athletic Bilbao",
      "league": "Spanish Primera Division",
      "rank": 31,
      "prev_rank": 46,
      "off": 1.9,
      "def": 0.7,
      "spi": 72.4
   },
   {
      "name": "RB Leipzig",
      "league": "German Bundesliga",
      "rank": 32,
      "prev_rank": 25,
      "off": 2.2,
      "def": 0.9,
      "spi": 72.4
   },
   {
      "name": "Real Betis",
      "league": "Spanish Primera Division",
      "rank": 33,
      "prev_rank": 41,
      "off": 2,
      "def": 0.8,
      "spi": 72
   },
   {
      "name": "Spartak Moscow",
      "league": "Russian Premier Liga",
      "rank": 34,
      "prev_rank": 43,
      "off": 2.1,
      "def": 0.9,
      "spi": 71.9
   },
   {
      "name": "Eintracht Frankfurt",
      "league": "German Bundesliga",
      "rank": 35,
      "prev_rank": 36,
      "off": 1.9,
      "def": 0.7,
      "spi": 71.9
   },
   {
      "name": "Eibar",
      "league": "Spanish Primera Division",
      "rank": 36,
      "prev_rank": 32,
      "off": 1.8,
      "def": 0.6,
      "spi": 71.8
   },
   {
      "name": "Celta Vigo",
      "league": "Spanish Primera Division",
      "rank": 37,
      "prev_rank": 44,
      "off": 2.1,
      "def": 0.9,
      "spi": 71.7
   },
   {
      "name": "Fiorentina",
      "league": "Italy Serie A",
      "rank": 38,
      "prev_rank": 42,
      "off": 1.9,
      "def": 0.8,
      "spi": 71.6
   },
   {
      "name": "Besiktas",
      "league": "Turkish Turkcell Super Lig",
      "rank": 39,
      "prev_rank": 51,
      "off": 2,
      "def": 0.8,
      "spi": 71.5
   },
   {
      "name": "Getafe",
      "league": "Spanish Primera Division",
      "rank": 40,
      "prev_rank": 34,
      "off": 1.7,
      "def": 0.6,
      "spi": 71.1
   },
   {
      "name": "Werder Bremen",
      "league": "German Bundesliga",
      "rank": 41,
      "prev_rank": 37,
      "off": 2,
      "def": 0.9,
      "spi": 71.1
   },
   {
      "name": "FC Salzburg",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 42,
      "prev_rank": 35,
      "off": 2,
      "def": 0.8,
      "spi": 71.1
   },
   {
      "name": "AC Milan",
      "league": "Italy Serie A",
      "rank": 43,
      "prev_rank": 40,
      "off": 1.9,
      "def": 0.8,
      "spi": 71
   },
   {
      "name": "Sporting CP",
      "league": "Portuguese Liga",
      "rank": 44,
      "prev_rank": 45,
      "off": 1.9,
      "def": 0.8,
      "spi": 70.7
   },
   {
      "name": "CSKA Moscow",
      "league": "Russian Premier Liga",
      "rank": 45,
      "prev_rank": 33,
      "off": 1.8,
      "def": 0.7,
      "spi": 70.3
   },
   {
      "name": "Girona FC",
      "league": "Spanish Primera Division",
      "rank": 46,
      "prev_rank": 38,
      "off": 1.9,
      "def": 0.8,
      "spi": 69.1
   },
   {
      "name": "Ajax",
      "league": "Dutch Eredivisie",
      "rank": 47,
      "prev_rank": 47,
      "off": 2.4,
      "def": 1.2,
      "spi": 68.5
   },
   {
      "name": "Villarreal",
      "league": "Spanish Primera Division",
      "rank": 48,
      "prev_rank": 39,
      "off": 1.8,
      "def": 0.8,
      "spi": 68.2
   },
   {
      "name": "Borussia Monchengladbach",
      "league": "German Bundesliga",
      "rank": 49,
      "prev_rank": 49,
      "off": 2,
      "def": 1,
      "spi": 68
   },
   {
      "name": "PSV",
      "league": "Dutch Eredivisie",
      "rank": 50,
      "prev_rank": 57,
      "off": 2.5,
      "def": 1.4,
      "spi": 67.6
   },
   {
      "name": "Dynamo Kiev",
      "league": "UEFA Europa League",
      "rank": 51,
      "prev_rank": 52,
      "off": 1.9,
      "def": 0.9,
      "spi": 67.3
   },
   {
      "name": "Zenit St Petersburg",
      "league": "Russian Premier Liga",
      "rank": 52,
      "prev_rank": 48,
      "off": 1.6,
      "def": 0.7,
      "spi": 67.2
   },
   {
      "name": "Espanyol",
      "league": "Spanish Primera Division",
      "rank": 53,
      "prev_rank": 56,
      "off": 1.6,
      "def": 0.7,
      "spi": 67
   },
   {
      "name": "Basel",
      "league": "Swiss Raiffeisen Super League",
      "rank": 54,
      "prev_rank": 66,
      "off": 1.8,
      "def": 0.9,
      "spi": 66.7
   },
   {
      "name": "Fenerbahce",
      "league": "Turkish Turkcell Super Lig",
      "rank": 55,
      "prev_rank": 58,
      "off": 1.9,
      "def": 0.9,
      "spi": 66.6
   },
   {
      "name": "Leganes",
      "league": "Spanish Primera Division",
      "rank": 56,
      "prev_rank": 62,
      "off": 1.6,
      "def": 0.7,
      "spi": 66.5
   },
   {
      "name": "Young Boys",
      "league": "Swiss Raiffeisen Super League",
      "rank": 57,
      "prev_rank": 61,
      "off": 2.2,
      "def": 1.2,
      "spi": 66.5
   },
   {
      "name": "Braga",
      "league": "Portuguese Liga",
      "rank": 58,
      "prev_rank": 50,
      "off": 1.9,
      "def": 0.9,
      "spi": 66.3
   },
   {
      "name": "FC Augsburg",
      "league": "German Bundesliga",
      "rank": 59,
      "prev_rank": 55,
      "off": 1.8,
      "def": 0.9,
      "spi": 66
   },
   {
      "name": "Hertha Berlin",
      "league": "German Bundesliga",
      "rank": 60,
      "prev_rank": 60,
      "off": 1.7,
      "def": 0.8,
      "spi": 66
   },
   {
      "name": "Lokomotiv Moscow",
      "league": "Russian Premier Liga",
      "rank": 61,
      "prev_rank": 59,
      "off": 1.7,
      "def": 0.8,
      "spi": 66
   },
   {
      "name": "Alavés",
      "league": "Spanish Primera Division",
      "rank": 62,
      "prev_rank": 64,
      "off": 1.7,
      "def": 0.8,
      "spi": 65.9
   },
   {
      "name": "Leicester City",
      "league": "Barclays Premier League",
      "rank": 63,
      "prev_rank": 54,
      "off": 1.8,
      "def": 0.9,
      "spi": 65.7
   },
   {
      "name": "Galatasaray",
      "league": "Turkish Turkcell Super Lig",
      "rank": 64,
      "prev_rank": 53,
      "off": 2,
      "def": 1.1,
      "spi": 65.6
   },
   {
      "name": "Torino",
      "league": "Italy Serie A",
      "rank": 65,
      "prev_rank": 63,
      "off": 1.8,
      "def": 0.9,
      "spi": 65.1
   },
   {
      "name": "FC Krasnodar",
      "league": "Russian Premier Liga",
      "rank": 66,
      "prev_rank": 72,
      "off": 1.7,
      "def": 0.9,
      "spi": 64.8
   },
   {
      "name": "VfL Wolfsburg",
      "league": "German Bundesliga",
      "rank": 67,
      "prev_rank": 70,
      "off": 1.6,
      "def": 0.8,
      "spi": 63.8
   },
   {
      "name": "VfB Stuttgart",
      "league": "German Bundesliga",
      "rank": 68,
      "prev_rank": 65,
      "off": 1.6,
      "def": 0.8,
      "spi": 63.2
   },
   {
      "name": "Burnley",
      "league": "Barclays Premier League",
      "rank": 69,
      "prev_rank": 74,
      "off": 1.6,
      "def": 0.8,
      "spi": 62.8
   },
   {
      "name": "Hannover 96",
      "league": "German Bundesliga",
      "rank": 70,
      "prev_rank": 73,
      "off": 1.8,
      "def": 1.1,
      "spi": 62.8
   },
   {
      "name": "Crystal Palace",
      "league": "Barclays Premier League",
      "rank": 71,
      "prev_rank": 69,
      "off": 1.8,
      "def": 1,
      "spi": 62.7
   },
   {
      "name": "Stade Rennes",
      "league": "French Ligue 1",
      "rank": 72,
      "prev_rank": 76,
      "off": 1.5,
      "def": 0.8,
      "spi": 62.6
   },
   {
      "name": "Montpellier",
      "league": "French Ligue 1",
      "rank": 73,
      "prev_rank": 77,
      "off": 1.4,
      "def": 0.7,
      "spi": 62.1
   },
   {
      "name": "Málaga",
      "league": "Spanish Primera Division",
      "rank": 74,
      "prev_rank": 71,
      "off": 1.5,
      "def": 0.8,
      "spi": 62.1
   },
   {
      "name": "Boca Juniors",
      "league": "Argentina Primera Division",
      "rank": 75,
      "prev_rank": 68,
      "off": 1.6,
      "def": 0.9,
      "spi": 62
   },
   {
      "name": "Istanbul Basaksehir",
      "league": "Turkish Turkcell Super Lig",
      "rank": 76,
      "prev_rank": 78,
      "off": 1.6,
      "def": 0.9,
      "spi": 61.5
   },
   {
      "name": "Malmo FF",
      "league": "Swedish Allsvenskan",
      "rank": 77,
      "prev_rank": 67,
      "off": 1.8,
      "def": 1.1,
      "spi": 61.2
   },
   {
      "name": "Angers",
      "league": "French Ligue 1",
      "rank": 78,
      "prev_rank": 75,
      "off": 1.5,
      "def": 0.9,
      "spi": 61.1
   },
   {
      "name": "Mainz",
      "league": "German Bundesliga",
      "rank": 79,
      "prev_rank": 82,
      "off": 1.6,
      "def": 0.9,
      "spi": 61.1
   },
   {
      "name": "Sampdoria",
      "league": "Italy Serie A",
      "rank": 80,
      "prev_rank": 81,
      "off": 1.8,
      "def": 1.1,
      "spi": 61
   },
   {
      "name": "Nice",
      "league": "French Ligue 1",
      "rank": 81,
      "prev_rank": 80,
      "off": 1.6,
      "def": 0.9,
      "spi": 60.9
   },
   {
      "name": "St Etienne",
      "league": "French Ligue 1",
      "rank": 82,
      "prev_rank": 92,
      "off": 1.6,
      "def": 1,
      "spi": 60.5
   },
   {
      "name": "Sporting Gijón",
      "league": "Spanish Segunda Division",
      "rank": 83,
      "prev_rank": 79,
      "off": 1.6,
      "def": 0.9,
      "spi": 60.5
   },
   {
      "name": "Olympiacos",
      "league": "UEFA Champions League",
      "rank": 84,
      "prev_rank": 83,
      "off": 1.6,
      "def": 1,
      "spi": 60.4
   },
   {
      "name": "Everton",
      "league": "Barclays Premier League",
      "rank": 85,
      "prev_rank": 88,
      "off": 1.7,
      "def": 1.1,
      "spi": 60.1
   },
   {
      "name": "Genoa",
      "league": "Italy Serie A",
      "rank": 86,
      "prev_rank": 85,
      "off": 1.3,
      "def": 0.7,
      "spi": 60.1
   },
   {
      "name": "Deportivo La Coruña",
      "league": "Spanish Primera Division",
      "rank": 87,
      "prev_rank": 89,
      "off": 1.7,
      "def": 1,
      "spi": 60
   },
   {
      "name": "Anderlecht",
      "league": "UEFA Champions League",
      "rank": 88,
      "prev_rank": 86,
      "off": 1.7,
      "def": 1.1,
      "spi": 59.8
   },
   {
      "name": "Viktoria Plzen",
      "league": "UEFA Europa League",
      "rank": 89,
      "prev_rank": 87,
      "off": 1.8,
      "def": 1.1,
      "spi": 59.8
   },
   {
      "name": "Hamburg SV",
      "league": "German Bundesliga",
      "rank": 90,
      "prev_rank": 102,
      "off": 1.6,
      "def": 1,
      "spi": 59.5
   },
   {
      "name": "SC Freiburg",
      "league": "German Bundesliga",
      "rank": 91,
      "prev_rank": 84,
      "off": 1.6,
      "def": 1,
      "spi": 59.5
   },
   {
      "name": "Feyenoord",
      "league": "Dutch Eredivisie",
      "rank": 92,
      "prev_rank": 94,
      "off": 2,
      "def": 1.4,
      "spi": 59.4
   },
   {
      "name": "FC Cologne",
      "league": "German Bundesliga",
      "rank": 93,
      "prev_rank": 91,
      "off": 1.8,
      "def": 1.2,
      "spi": 59.3
   },
   {
      "name": "Levante",
      "league": "Spanish Primera Division",
      "rank": 94,
      "prev_rank": 90,
      "off": 1.6,
      "def": 1,
      "spi": 58.9
   },
   {
      "name": "Newcastle",
      "league": "Barclays Premier League",
      "rank": 95,
      "prev_rank": 97,
      "off": 1.6,
      "def": 1,
      "spi": 58.8
   },
   {
      "name": "Bordeaux",
      "league": "French Ligue 1",
      "rank": 96,
      "prev_rank": 93,
      "off": 1.4,
      "def": 0.9,
      "spi": 58.8
   },
   {
      "name": "Nantes",
      "league": "French Ligue 1",
      "rank": 97,
      "prev_rank": 95,
      "off": 1.4,
      "def": 0.9,
      "spi": 58.6
   },
   {
      "name": "Red Star Belgrade",
      "league": "UEFA Europa League",
      "rank": 98,
      "prev_rank": 98,
      "off": 1.9,
      "def": 1.3,
      "spi": 57.9
   },
   {
      "name": "Reims",
      "league": "French Ligue 2",
      "rank": 99,
      "prev_rank": 100,
      "off": 1.4,
      "def": 0.9,
      "spi": 57.8
   },
   {
      "name": "Southampton",
      "league": "Barclays Premier League",
      "rank": 100,
      "prev_rank": 113,
      "off": 1.6,
      "def": 1.1,
      "spi": 57.7
   },
   {
      "name": "Slavia Prague",
      "league": "UEFA Europa League",
      "rank": 101,
      "prev_rank": 101,
      "off": 1.6,
      "def": 1,
      "spi": 57.7
   },
   {
      "name": "Watford",
      "league": "Barclays Premier League",
      "rank": 102,
      "prev_rank": 96,
      "off": 1.7,
      "def": 1.1,
      "spi": 57.5
   },
   {
      "name": "AIK",
      "league": "Swedish Allsvenskan",
      "rank": 103,
      "prev_rank": 107,
      "off": 1.5,
      "def": 1,
      "spi": 57.4
   },
   {
      "name": "AFC Bournemouth",
      "league": "Barclays Premier League",
      "rank": 104,
      "prev_rank": 108,
      "off": 1.8,
      "def": 1.3,
      "spi": 57.2
   },
   {
      "name": "AZ",
      "league": "Dutch Eredivisie",
      "rank": 105,
      "prev_rank": 99,
      "off": 1.9,
      "def": 1.4,
      "spi": 57.2
   },
   {
      "name": "Dinamo Moscow",
      "league": "Russian Premier Liga",
      "rank": 106,
      "prev_rank": 123,
      "off": 1.4,
      "def": 0.9,
      "spi": 56.9
   },
   {
      "name": "Udinese",
      "league": "Italy Serie A",
      "rank": 107,
      "prev_rank": 105,
      "off": 1.5,
      "def": 1,
      "spi": 56.8
   },
   {
      "name": "Sassuolo",
      "league": "Italy Serie A",
      "rank": 108,
      "prev_rank": 106,
      "off": 1.5,
      "def": 1,
      "spi": 56.8
   },
   {
      "name": "Empoli",
      "league": "Italy Serie B",
      "rank": 109,
      "prev_rank": 104,
      "off": 1.7,
      "def": 1.2,
      "spi": 56.5
   },
   {
      "name": "Flamengo",
      "league": "Brasileiro Série A",
      "rank": 110,
      "prev_rank": 109,
      "off": 1.4,
      "def": 1,
      "spi": 56.3
   },
   {
      "name": "Rubin Kazan",
      "league": "Russian Premier Liga",
      "rank": 111,
      "prev_rank": 111,
      "off": 1.3,
      "def": 0.8,
      "spi": 56.3
   },
   {
      "name": "Palmeiras",
      "league": "Brasileiro Série A",
      "rank": 112,
      "prev_rank": 110,
      "off": 1.6,
      "def": 1.1,
      "spi": 56.2
   },
   {
      "name": "Trabzonspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 113,
      "prev_rank": 132,
      "off": 1.6,
      "def": 1.2,
      "spi": 56.1
   },
   {
      "name": "Racing Club",
      "league": "Argentina Primera Division",
      "rank": 114,
      "prev_rank": 103,
      "off": 1.6,
      "def": 1.1,
      "spi": 56.1
   },
   {
      "name": "Bologna",
      "league": "Italy Serie A",
      "rank": 115,
      "prev_rank": 112,
      "off": 1.4,
      "def": 1,
      "spi": 55.9
   },
   {
      "name": "Rosenborg",
      "league": "Norwegian Tippeligaen",
      "rank": 116,
      "prev_rank": 149,
      "off": 1.6,
      "def": 1.2,
      "spi": 55.7
   },
   {
      "name": "Corinthians",
      "league": "Brasileiro Série A",
      "rank": 117,
      "prev_rank": 115,
      "off": 1.4,
      "def": 1,
      "spi": 55.6
   },
   {
      "name": "Las Palmas",
      "league": "Spanish Primera Division",
      "rank": 118,
      "prev_rank": 120,
      "off": 1.6,
      "def": 1.1,
      "spi": 55.5
   },
   {
      "name": "FC Copenhagen",
      "league": "UEFA Europa League",
      "rank": 119,
      "prev_rank": 117,
      "off": 1.5,
      "def": 1.1,
      "spi": 55.3
   },
   {
      "name": "Atletico Mineiro",
      "league": "Brasileiro Série A",
      "rank": 120,
      "prev_rank": 119,
      "off": 1.7,
      "def": 1.3,
      "spi": 55.3
   },
   {
      "name": "FC Ufa",
      "league": "Russian Premier Liga",
      "rank": 121,
      "prev_rank": 114,
      "off": 1.3,
      "def": 0.9,
      "spi": 54.7
   },
   {
      "name": "West Ham United",
      "league": "Barclays Premier League",
      "rank": 122,
      "prev_rank": 121,
      "off": 1.7,
      "def": 1.3,
      "spi": 54.6
   },
   {
      "name": "Toulouse",
      "league": "French Ligue 1",
      "rank": 123,
      "prev_rank": 116,
      "off": 1.3,
      "def": 0.9,
      "spi": 54.4
   },
   {
      "name": "Dijon FCO",
      "league": "French Ligue 1",
      "rank": 124,
      "prev_rank": 130,
      "off": 1.6,
      "def": 1.2,
      "spi": 54.3
   },
   {
      "name": "Rayo Vallecano",
      "league": "Spanish Segunda Division",
      "rank": 125,
      "prev_rank": 133,
      "off": 1.5,
      "def": 1.2,
      "spi": 54.1
   },
   {
      "name": "Rapid Vienna",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 126,
      "prev_rank": 118,
      "off": 1.6,
      "def": 1.3,
      "spi": 53.7
   },
   {
      "name": "Fulham",
      "league": "English League Championship",
      "rank": 127,
      "prev_rank": 134,
      "off": 1.5,
      "def": 1.1,
      "spi": 53.5
   },
   {
      "name": "River Plate",
      "league": "Argentina Primera Division",
      "rank": 128,
      "prev_rank": 136,
      "off": 1.5,
      "def": 1.1,
      "spi": 53.5
   },
   {
      "name": "Monterrey",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 129,
      "prev_rank": 128,
      "off": 1.6,
      "def": 1.2,
      "spi": 53.4
   },
   {
      "name": "Godoy Cruz",
      "league": "Argentina Primera Division",
      "rank": 130,
      "prev_rank": 174,
      "off": 1.4,
      "def": 1,
      "spi": 53.4
   },
   {
      "name": "AEK Athens",
      "league": "UEFA Europa League",
      "rank": 131,
      "prev_rank": 129,
      "off": 1.3,
      "def": 0.9,
      "spi": 53.3
   },
   {
      "name": "Celtic",
      "league": "Scottish Premiership",
      "rank": 132,
      "prev_rank": 124,
      "off": 1.5,
      "def": 1.2,
      "spi": 53.3
   },
   {
      "name": "Brighton and Hove Albion",
      "league": "Barclays Premier League",
      "rank": 133,
      "prev_rank": 125,
      "off": 1.4,
      "def": 1.1,
      "spi": 53.2
   },
   {
      "name": "CA Independiente",
      "league": "Argentina Primera Division",
      "rank": 134,
      "prev_rank": 139,
      "off": 1.3,
      "def": 0.9,
      "spi": 53.1
   },
   {
      "name": "Ural Sverdlovsk Oblast",
      "league": "Russian Premier Liga",
      "rank": 135,
      "prev_rank": 126,
      "off": 1.4,
      "def": 1,
      "spi": 53
   },
   {
      "name": "Talleres de Córdoba",
      "league": "Argentina Primera Division",
      "rank": 136,
      "prev_rank": 127,
      "off": 1.2,
      "def": 0.9,
      "spi": 52.9
   },
   {
      "name": "FC Arsenal Tula",
      "league": "Russian Premier Liga",
      "rank": 137,
      "prev_rank": 146,
      "off": 1.4,
      "def": 1,
      "spi": 52.9
   },
   {
      "name": "Wolverhampton",
      "league": "English League Championship",
      "rank": 138,
      "prev_rank": 148,
      "off": 1.4,
      "def": 1.1,
      "spi": 52.8
   },
   {
      "name": "Tigres UANL",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 139,
      "prev_rank": 131,
      "off": 1.3,
      "def": 1,
      "spi": 52.6
   },
   {
      "name": "Cruzeiro",
      "league": "Brasileiro Série A",
      "rank": 140,
      "prev_rank": 142,
      "off": 1.4,
      "def": 1.1,
      "spi": 52.1
   },
   {
      "name": "Apoel Nicosia",
      "league": "UEFA Champions League",
      "rank": 141,
      "prev_rank": 143,
      "off": 1.5,
      "def": 1.2,
      "spi": 52.1
   },
   {
      "name": "FK Partizan Belgrade",
      "league": "UEFA Europa League",
      "rank": 142,
      "prev_rank": 144,
      "off": 1.7,
      "def": 1.4,
      "spi": 52.1
   },
   {
      "name": "Swansea City",
      "league": "Barclays Premier League",
      "rank": 143,
      "prev_rank": 140,
      "off": 1.3,
      "def": 1.1,
      "spi": 52
   },
   {
      "name": "Defensa y Justicia",
      "league": "Argentina Primera Division",
      "rank": 144,
      "prev_rank": 156,
      "off": 1.4,
      "def": 1.1,
      "spi": 51.9
   },
   {
      "name": "Rostov",
      "league": "Russian Premier Liga",
      "rank": 145,
      "prev_rank": 137,
      "off": 1.2,
      "def": 0.9,
      "spi": 51.9
   },
   {
      "name": "Nimes",
      "league": "French Ligue 2",
      "rank": 146,
      "prev_rank": 154,
      "off": 1.5,
      "def": 1.2,
      "spi": 51.8
   },
   {
      "name": "Rijeka",
      "league": "UEFA Europa League",
      "rank": 147,
      "prev_rank": 147,
      "off": 1.4,
      "def": 1.1,
      "spi": 51.7
   },
   {
      "name": "Guingamp",
      "league": "French Ligue 1",
      "rank": 148,
      "prev_rank": 170,
      "off": 1.4,
      "def": 1.1,
      "spi": 51.7
   },
   {
      "name": "Stoke City",
      "league": "Barclays Premier League",
      "rank": 149,
      "prev_rank": 160,
      "off": 1.4,
      "def": 1.2,
      "spi": 51.6
   },
   {
      "name": "Cadiz",
      "league": "Spanish Segunda Division",
      "rank": 150,
      "prev_rank": 138,
      "off": 1,
      "def": 0.7,
      "spi": 51.5
   },
   {
      "name": "FC Ingolstadt 04",
      "league": "German 2. Bundesliga",
      "rank": 151,
      "prev_rank": 141,
      "off": 1.4,
      "def": 1.2,
      "spi": 51.5
   },
   {
      "name": "FC Astana",
      "league": "UEFA Europa League",
      "rank": 152,
      "prev_rank": 150,
      "off": 1.6,
      "def": 1.3,
      "spi": 51.3
   },
   {
      "name": "Atlético Paranaense",
      "league": "Brasileiro Série A",
      "rank": 153,
      "prev_rank": 151,
      "off": 1.3,
      "def": 1,
      "spi": 51.3
   },
   {
      "name": "Grêmio",
      "league": "Brasileiro Série A",
      "rank": 154,
      "prev_rank": 153,
      "off": 1.3,
      "def": 1.1,
      "spi": 50.9
   },
   {
      "name": "SK Sturm Graz",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 155,
      "prev_rank": 122,
      "off": 1.6,
      "def": 1.4,
      "spi": 50.9
   },
   {
      "name": "Caen",
      "league": "French Ligue 1",
      "rank": 156,
      "prev_rank": 135,
      "off": 1.3,
      "def": 1.1,
      "spi": 50.7
   },
   {
      "name": "Vítoria",
      "league": "Brasileiro Série A",
      "rank": 157,
      "prev_rank": 155,
      "off": 1.5,
      "def": 1.3,
      "spi": 50.5
   },
   {
      "name": "West Bromwich Albion",
      "league": "Barclays Premier League",
      "rank": 158,
      "prev_rank": 161,
      "off": 1.3,
      "def": 1.1,
      "spi": 50.4
   },
   {
      "name": "Steaua Bucuresti",
      "league": "UEFA Europa League",
      "rank": 159,
      "prev_rank": 157,
      "off": 1.3,
      "def": 1.1,
      "spi": 50.4
   },
   {
      "name": "Ludogorets",
      "league": "UEFA Europa League",
      "rank": 160,
      "prev_rank": 159,
      "off": 1.4,
      "def": 1.2,
      "spi": 50.3
   },
   {
      "name": "Strasbourg",
      "league": "French Ligue 1",
      "rank": 161,
      "prev_rank": 171,
      "off": 1.5,
      "def": 1.3,
      "spi": 50.3
   },
   {
      "name": "Santos Laguna",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 162,
      "prev_rank": 167,
      "off": 1.5,
      "def": 1.3,
      "spi": 50.2
   },
   {
      "name": "Cagliari",
      "league": "Italy Serie A",
      "rank": 163,
      "prev_rank": 158,
      "off": 1.4,
      "def": 1.2,
      "spi": 50.1
   },
   {
      "name": "Spal",
      "league": "Italy Serie A",
      "rank": 164,
      "prev_rank": 164,
      "off": 1.3,
      "def": 1.1,
      "spi": 50.1
   },
   {
      "name": "São Paulo",
      "league": "Brasileiro Série A",
      "rank": 165,
      "prev_rank": 163,
      "off": 1.3,
      "def": 1.1,
      "spi": 50.1
   },
   {
      "name": "Tenerife",
      "league": "Spanish Segunda Division",
      "rank": 166,
      "prev_rank": 172,
      "off": 1.4,
      "def": 1.2,
      "spi": 49.9
   },
   {
      "name": "Estudiantes",
      "league": "Argentina Primera Division",
      "rank": 167,
      "prev_rank": 145,
      "off": 1.1,
      "def": 0.9,
      "spi": 49.5
   },
   {
      "name": "Lille",
      "league": "French Ligue 1",
      "rank": 168,
      "prev_rank": 165,
      "off": 1.3,
      "def": 1.1,
      "spi": 49.4
   },
   {
      "name": "Toluca",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 169,
      "prev_rank": 169,
      "off": 1.3,
      "def": 1.2,
      "spi": 49.3
   },
   {
      "name": "Chievo Verona",
      "league": "Italy Serie A",
      "rank": 170,
      "prev_rank": 175,
      "off": 1.3,
      "def": 1.2,
      "spi": 49.1
   },
   {
      "name": "Amkar Perm",
      "league": "Russian Premier Liga",
      "rank": 171,
      "prev_rank": 194,
      "off": 1,
      "def": 0.9,
      "spi": 49.1
   },
   {
      "name": "Real Zaragoza",
      "league": "Spanish Segunda Division",
      "rank": 172,
      "prev_rank": 182,
      "off": 1.2,
      "def": 1.1,
      "spi": 49
   },
   {
      "name": "Amiens",
      "league": "French Ligue 1",
      "rank": 173,
      "prev_rank": 191,
      "off": 1.2,
      "def": 1.1,
      "spi": 48.6
   },
   {
      "name": "Chapecoense AF",
      "league": "Brasileiro Série A",
      "rank": 174,
      "prev_rank": 176,
      "off": 1.2,
      "def": 1.1,
      "spi": 48.6
   },
   {
      "name": "Santos",
      "league": "Brasileiro Série A",
      "rank": 175,
      "prev_rank": 177,
      "off": 1.3,
      "def": 1.1,
      "spi": 48.6
   },
   {
      "name": "Union Santa Fe",
      "league": "Argentina Primera Division",
      "rank": 176,
      "prev_rank": 166,
      "off": 1.1,
      "def": 1,
      "spi": 48.6
   },
   {
      "name": "Osasuna",
      "league": "Spanish Segunda Division",
      "rank": 177,
      "prev_rank": 183,
      "off": 1,
      "def": 0.9,
      "spi": 48.4
   },
   {
      "name": "Bahía",
      "league": "Brasileiro Série A",
      "rank": 178,
      "prev_rank": 178,
      "off": 1.3,
      "def": 1.2,
      "spi": 48.4
   },
   {
      "name": "Crotone",
      "league": "Italy Serie A",
      "rank": 179,
      "prev_rank": 179,
      "off": 1.3,
      "def": 1.2,
      "spi": 48.3
   },
   {
      "name": "Terek Grozny",
      "league": "Russian Premier Liga",
      "rank": 180,
      "prev_rank": 184,
      "off": 1.3,
      "def": 1.1,
      "spi": 48.3
   },
   {
      "name": "Hapoel Be'er",
      "league": "UEFA Europa League",
      "rank": 181,
      "prev_rank": 181,
      "off": 1.4,
      "def": 1.2,
      "spi": 48.3
   },
   {
      "name": "SD Huesca",
      "league": "Spanish Segunda Division",
      "rank": 182,
      "prev_rank": 168,
      "off": 1.2,
      "def": 1.1,
      "spi": 47.9
   },
   {
      "name": "Cardiff City",
      "league": "English League Championship",
      "rank": 183,
      "prev_rank": 180,
      "off": 1.3,
      "def": 1.2,
      "spi": 47.9
   },
   {
      "name": "Argentinos Juniors",
      "league": "Argentina Primera Division",
      "rank": 184,
      "prev_rank": 198,
      "off": 1.2,
      "def": 1.1,
      "spi": 47.8
   },
   {
      "name": "Club América",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 185,
      "prev_rank": 189,
      "off": 1.2,
      "def": 1.2,
      "spi": 47.5
   },
   {
      "name": "Huddersfield Town",
      "league": "Barclays Premier League",
      "rank": 186,
      "prev_rank": 195,
      "off": 1.2,
      "def": 1.1,
      "spi": 47.4
   },
   {
      "name": "Aston Villa",
      "league": "English League Championship",
      "rank": 187,
      "prev_rank": 173,
      "off": 1.3,
      "def": 1.2,
      "spi": 47.1
   },
   {
      "name": "Numancia",
      "league": "Spanish Segunda Division",
      "rank": 188,
      "prev_rank": 213,
      "off": 1.1,
      "def": 1,
      "spi": 47.1
   },
   {
      "name": "San Lorenzo",
      "league": "Argentina Primera Division",
      "rank": 189,
      "prev_rank": 152,
      "off": 1.1,
      "def": 1,
      "spi": 47.1
   },
   {
      "name": "Kasimpasa",
      "league": "Turkish Turkcell Super Lig",
      "rank": 190,
      "prev_rank": 205,
      "off": 1.5,
      "def": 1.4,
      "spi": 47.1
   },
   {
      "name": "Brentford",
      "league": "English League Championship",
      "rank": 191,
      "prev_rank": 206,
      "off": 1.3,
      "def": 1.3,
      "spi": 47
   },
   {
      "name": "Maccabi Tel-Aviv",
      "league": "UEFA Europa League",
      "rank": 192,
      "prev_rank": 192,
      "off": 1.3,
      "def": 1.2,
      "spi": 46.9
   },
   {
      "name": "Botafogo",
      "league": "Brasileiro Série A",
      "rank": 193,
      "prev_rank": 196,
      "off": 1.2,
      "def": 1.2,
      "spi": 46.8
   },
   {
      "name": "Parma",
      "league": "Italy Serie B",
      "rank": 194,
      "prev_rank": 218,
      "off": 1.2,
      "def": 1.2,
      "spi": 46.6
   },
   {
      "name": "Sport Recife",
      "league": "Brasileiro Série A",
      "rank": 195,
      "prev_rank": 199,
      "off": 1.3,
      "def": 1.2,
      "spi": 46.5
   },
   {
      "name": "Konyaspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 196,
      "prev_rank": 264,
      "off": 1.2,
      "def": 1.1,
      "spi": 46.5
   },
   {
      "name": "Real Oviedo",
      "league": "Spanish Segunda Division",
      "rank": 197,
      "prev_rank": 217,
      "off": 1.2,
      "def": 1.1,
      "spi": 46.5
   },
   {
      "name": "Banfield",
      "league": "Argentina Primera Division",
      "rank": 198,
      "prev_rank": 216,
      "off": 1.1,
      "def": 1.1,
      "spi": 46.3
   },
   {
      "name": "Palermo",
      "league": "Italy Serie B",
      "rank": 199,
      "prev_rank": 186,
      "off": 1.3,
      "def": 1.2,
      "spi": 46.2
   },
   {
      "name": "Rangers",
      "league": "Scottish Premiership",
      "rank": 200,
      "prev_rank": 230,
      "off": 1.7,
      "def": 1.7,
      "spi": 46.2
   },
   {
      "name": "FC Utrecht",
      "league": "Dutch Eredivisie",
      "rank": 201,
      "prev_rank": 188,
      "off": 1.7,
      "def": 1.7,
      "spi": 46.1
   },
   {
      "name": "Velez Sarsfield",
      "league": "Argentina Primera Division",
      "rank": 202,
      "prev_rank": 203,
      "off": 1.2,
      "def": 1.2,
      "spi": 46
   },
   {
      "name": "Vasco da Gama",
      "league": "Brasileiro Série A",
      "rank": 203,
      "prev_rank": 204,
      "off": 1.1,
      "def": 1.1,
      "spi": 46
   },
   {
      "name": "Djurgardens IF",
      "league": "Swedish Allsvenskan",
      "rank": 204,
      "prev_rank": 187,
      "off": 1.3,
      "def": 1.3,
      "spi": 45.7
   },
   {
      "name": "Metz",
      "league": "French Ligue 1",
      "rank": 205,
      "prev_rank": 185,
      "off": 1.4,
      "def": 1.4,
      "spi": 45.7
   },
   {
      "name": "Toronto FC",
      "league": "Major League Soccer",
      "rank": 206,
      "prev_rank": 207,
      "off": 1.4,
      "def": 1.4,
      "spi": 45.7
   },
   {
      "name": "Millwall",
      "league": "English League Championship",
      "rank": 207,
      "prev_rank": 227,
      "off": 1.3,
      "def": 1.3,
      "spi": 45.7
   },
   {
      "name": "FC Luzern",
      "league": "Swiss Raiffeisen Super League",
      "rank": 208,
      "prev_rank": 193,
      "off": 1.4,
      "def": 1.4,
      "spi": 45.7
   },
   {
      "name": "Benevento",
      "league": "Italy Serie A",
      "rank": 209,
      "prev_rank": 228,
      "off": 1.4,
      "def": 1.4,
      "spi": 45.6
   },
   {
      "name": "Fluminense",
      "league": "Brasileiro Série A",
      "rank": 210,
      "prev_rank": 209,
      "off": 1.3,
      "def": 1.3,
      "spi": 45.5
   },
   {
      "name": "Colon Santa Fe",
      "league": "Argentina Primera Division",
      "rank": 211,
      "prev_rank": 211,
      "off": 1.1,
      "def": 1,
      "spi": 45.5
   },
   {
      "name": "Östersunds FK",
      "league": "Swedish Allsvenskan",
      "rank": 212,
      "prev_rank": 162,
      "off": 1.3,
      "def": 1.3,
      "spi": 45.4
   },
   {
      "name": "Anzhi Makhachkala",
      "league": "Russian Premier Liga",
      "rank": 213,
      "prev_rank": 190,
      "off": 1.4,
      "def": 1.4,
      "spi": 45.4
   },
   {
      "name": "Cruz Azul",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 214,
      "prev_rank": 215,
      "off": 1.2,
      "def": 1.2,
      "spi": 45.3
   },
   {
      "name": "Alanyaspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 215,
      "prev_rank": 234,
      "off": 1.6,
      "def": 1.6,
      "spi": 45.1
   },
   {
      "name": "Huracán",
      "league": "Argentina Primera Division",
      "rank": 216,
      "prev_rank": 212,
      "off": 1.1,
      "def": 1.1,
      "spi": 45.1
   },
   {
      "name": "LASK Linz",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 217,
      "prev_rank": 231,
      "off": 1.2,
      "def": 1.3,
      "spi": 45
   },
   {
      "name": "Rosario Central",
      "league": "Argentina Primera Division",
      "rank": 218,
      "prev_rank": 208,
      "off": 1.3,
      "def": 1.3,
      "spi": 44.9
   },
   {
      "name": "Portimonense",
      "league": "Portuguese Liga",
      "rank": 219,
      "prev_rank": 220,
      "off": 1.4,
      "def": 1.5,
      "spi": 44.9
   },
   {
      "name": "Real Valladolid",
      "league": "Spanish Segunda Division",
      "rank": 220,
      "prev_rank": 210,
      "off": 1.3,
      "def": 1.3,
      "spi": 44.7
   },
   {
      "name": "SV Mattersburg",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 221,
      "prev_rank": 237,
      "off": 1.5,
      "def": 1.6,
      "spi": 44.7
   },
   {
      "name": "FC Zorya Luhansk",
      "league": "UEFA Europa League",
      "rank": 222,
      "prev_rank": 223,
      "off": 1.2,
      "def": 1.2,
      "spi": 44.4
   },
   {
      "name": "1. FC Nürnberg",
      "league": "German 2. Bundesliga",
      "rank": 223,
      "prev_rank": 222,
      "off": 1.3,
      "def": 1.4,
      "spi": 44.4
   },
   {
      "name": "Rio Ave",
      "league": "Portuguese Liga",
      "rank": 224,
      "prev_rank": 201,
      "off": 1.1,
      "def": 1.2,
      "spi": 44.4
   },
   {
      "name": "Troyes",
      "league": "French Ligue 1",
      "rank": 225,
      "prev_rank": 197,
      "off": 1.1,
      "def": 1.1,
      "spi": 44.3
   },
   {
      "name": "Belgrano Cordoba",
      "league": "Argentina Primera Division",
      "rank": 226,
      "prev_rank": 232,
      "off": 1.1,
      "def": 1.1,
      "spi": 44.1
   },
   {
      "name": "SV Zulte Waregem",
      "league": "UEFA Europa League",
      "rank": 227,
      "prev_rank": 224,
      "off": 1.5,
      "def": 1.6,
      "spi": 44.1
   },
   {
      "name": "FK Austria Vienna",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 228,
      "prev_rank": 252,
      "off": 1.4,
      "def": 1.5,
      "spi": 44
   },
   {
      "name": "Necaxa",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 229,
      "prev_rank": 226,
      "off": 1.1,
      "def": 1.2,
      "spi": 43.9
   },
   {
      "name": "Tigre",
      "league": "Argentina Primera Division",
      "rank": 230,
      "prev_rank": 245,
      "off": 1.1,
      "def": 1.2,
      "spi": 43.8
   },
   {
      "name": "Atlético Tucumán",
      "league": "Argentina Primera Division",
      "rank": 231,
      "prev_rank": 219,
      "off": 1.1,
      "def": 1.2,
      "spi": 43.6
   },
   {
      "name": "Middlesbrough",
      "league": "English League Championship",
      "rank": 232,
      "prev_rank": 225,
      "off": 1.2,
      "def": 1.3,
      "spi": 43.6
   },
   {
      "name": "Perugia",
      "league": "Italy Serie B",
      "rank": 233,
      "prev_rank": 202,
      "off": 1.2,
      "def": 1.3,
      "spi": 43.3
   },
   {
      "name": "Atlanta United FC",
      "league": "Major League Soccer",
      "rank": 234,
      "prev_rank": 247,
      "off": 1.3,
      "def": 1.4,
      "spi": 43.3
   },
   {
      "name": "Hull City",
      "league": "English League Championship",
      "rank": 235,
      "prev_rank": 304,
      "off": 1.3,
      "def": 1.4,
      "spi": 43.3
   },
   {
      "name": "Coritiba",
      "league": "Brasileiro Série A",
      "rank": 236,
      "prev_rank": 235,
      "off": 1.2,
      "def": 1.3,
      "spi": 43.2
   },
   {
      "name": "Guimaraes",
      "league": "Portuguese Liga",
      "rank": 237,
      "prev_rank": 254,
      "off": 1.3,
      "def": 1.4,
      "spi": 43.1
   },
   {
      "name": "Granada",
      "league": "Spanish Segunda Division",
      "rank": 238,
      "prev_rank": 233,
      "off": 1.3,
      "def": 1.4,
      "spi": 43
   },
   {
      "name": "FC Trenkwalder Admira",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 239,
      "prev_rank": 244,
      "off": 1.6,
      "def": 1.7,
      "spi": 43
   },
   {
      "name": "Sheffield United",
      "league": "English League Championship",
      "rank": 240,
      "prev_rank": 240,
      "off": 1.2,
      "def": 1.3,
      "spi": 42.8
   },
   {
      "name": "Holstein Kiel",
      "league": "German 2. Bundesliga",
      "rank": 241,
      "prev_rank": 238,
      "off": 1.3,
      "def": 1.4,
      "spi": 42.8
   },
   {
      "name": "St Gallen",
      "league": "Swiss Raiffeisen Super League",
      "rank": 242,
      "prev_rank": 236,
      "off": 1.6,
      "def": 1.7,
      "spi": 42.6
   },
   {
      "name": "Genclerbirligi",
      "league": "Turkish Turkcell Super Lig",
      "rank": 243,
      "prev_rank": 249,
      "off": 1.2,
      "def": 1.3,
      "spi": 42.6
   },
   {
      "name": "Lorient",
      "league": "French Ligue 2",
      "rank": 244,
      "prev_rank": 259,
      "off": 1.4,
      "def": 1.5,
      "spi": 42.6
   },
   {
      "name": "Tijuana",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 245,
      "prev_rank": 239,
      "off": 1.1,
      "def": 1.2,
      "spi": 42.4
   },
   {
      "name": "BATE Borisov",
      "league": "UEFA Europa League",
      "rank": 246,
      "prev_rank": 243,
      "off": 1.3,
      "def": 1.4,
      "spi": 42.3
   },
   {
      "name": "Akhisar Belediye",
      "league": "Turkish Turkcell Super Lig",
      "rank": 247,
      "prev_rank": 200,
      "off": 1.3,
      "def": 1.5,
      "spi": 42.1
   },
   {
      "name": "Newell's Old Boys",
      "league": "Argentina Primera Division",
      "rank": 248,
      "prev_rank": 255,
      "off": 1,
      "def": 1.1,
      "spi": 42.1
   },
   {
      "name": "FC Sion",
      "league": "Swiss Raiffeisen Super League",
      "rank": 249,
      "prev_rank": 274,
      "off": 1.4,
      "def": 1.5,
      "spi": 41.9
   },
   {
      "name": "Pachuca",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 250,
      "prev_rank": 276,
      "off": 1.4,
      "def": 1.6,
      "spi": 41.7
   },
   {
      "name": "Molde",
      "league": "Norwegian Tippeligaen",
      "rank": 251,
      "prev_rank": 214,
      "off": 1.3,
      "def": 1.5,
      "spi": 41.7
   },
   {
      "name": "1. FC Union Berlin",
      "league": "German 2. Bundesliga",
      "rank": 252,
      "prev_rank": 251,
      "off": 1.3,
      "def": 1.5,
      "spi": 41.5
   },
   {
      "name": "Arminia Bielefeld",
      "league": "German 2. Bundesliga",
      "rank": 253,
      "prev_rank": 258,
      "off": 1.3,
      "def": 1.5,
      "spi": 41.4
   },
   {
      "name": "NK Maribor",
      "league": "UEFA Champions League",
      "rank": 254,
      "prev_rank": 250,
      "off": 1.4,
      "def": 1.7,
      "spi": 41.2
   },
   {
      "name": "Derby County",
      "league": "English League Championship",
      "rank": 255,
      "prev_rank": 256,
      "off": 1.2,
      "def": 1.4,
      "spi": 41.1
   },
   {
      "name": "Preston North End",
      "league": "English League Championship",
      "rank": 256,
      "prev_rank": 253,
      "off": 1.2,
      "def": 1.3,
      "spi": 41.1
   },
   {
      "name": "AC Ajaccio",
      "league": "French Ligue 2",
      "rank": 257,
      "prev_rank": 290,
      "off": 1.3,
      "def": 1.5,
      "spi": 41.1
   },
   {
      "name": "Guadalajara",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 258,
      "prev_rank": 248,
      "off": 1.1,
      "def": 1.3,
      "spi": 40.6
   },
   {
      "name": "Atlético Goianiense",
      "league": "Brasileiro Série A",
      "rank": 259,
      "prev_rank": 260,
      "off": 1.1,
      "def": 1.3,
      "spi": 40.6
   },
   {
      "name": "Clermont Foot",
      "league": "French Ligue 2",
      "rank": 260,
      "prev_rank": 242,
      "off": 1,
      "def": 1.2,
      "spi": 40.6
   },
   {
      "name": "BK Hacken",
      "league": "Swedish Allsvenskan",
      "rank": 261,
      "prev_rank": 229,
      "off": 1.2,
      "def": 1.4,
      "spi": 40.6
   },
   {
      "name": "Chaves",
      "league": "Portuguese Liga",
      "rank": 262,
      "prev_rank": 257,
      "off": 1.2,
      "def": 1.4,
      "spi": 40.6
   },
   {
      "name": "Morelia",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 263,
      "prev_rank": 275,
      "off": 1.2,
      "def": 1.4,
      "spi": 40.5
   },
   {
      "name": "New York City FC",
      "league": "Major League Soccer",
      "rank": 264,
      "prev_rank": 295,
      "off": 1.3,
      "def": 1.5,
      "spi": 40.4
   },
   {
      "name": "VfL Bochum",
      "league": "German 2. Bundesliga",
      "rank": 265,
      "prev_rank": 265,
      "off": 1.2,
      "def": 1.4,
      "spi": 40.4
   },
   {
      "name": "Zlín",
      "league": "UEFA Europa League",
      "rank": 266,
      "prev_rank": 262,
      "off": 1.1,
      "def": 1.3,
      "spi": 40.3
   },
   {
      "name": "FK Qarabag",
      "league": "UEFA Champions League",
      "rank": 267,
      "prev_rank": 263,
      "off": 1.2,
      "def": 1.4,
      "spi": 40.3
   },
   {
      "name": "Stromsgodset",
      "league": "Norwegian Tippeligaen",
      "rank": 268,
      "prev_rank": 289,
      "off": 1.4,
      "def": 1.7,
      "spi": 40.1
   },
   {
      "name": "FC Zurich",
      "league": "Swiss Raiffeisen Super League",
      "rank": 269,
      "prev_rank": 241,
      "off": 1.2,
      "def": 1.4,
      "spi": 39.8
   },
   {
      "name": "Frosinone",
      "league": "Italy Serie B",
      "rank": 270,
      "prev_rank": 246,
      "off": 1.1,
      "def": 1.3,
      "spi": 39.7
   },
   {
      "name": "Yeni Malatyaspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 271,
      "prev_rank": 266,
      "off": 1.1,
      "def": 1.3,
      "spi": 39.7
   },
   {
      "name": "Albacete",
      "league": "Spanish Segunda Division",
      "rank": 272,
      "prev_rank": 273,
      "off": 0.8,
      "def": 1,
      "spi": 39.6
   },
   {
      "name": "SV Darmstadt 98",
      "league": "German 2. Bundesliga",
      "rank": 273,
      "prev_rank": 280,
      "off": 1.2,
      "def": 1.4,
      "spi": 39.6
   },
   {
      "name": "Antalyaspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 274,
      "prev_rank": 278,
      "off": 1.3,
      "def": 1.5,
      "spi": 39.6
   },
   {
      "name": "Maritimo",
      "league": "Portuguese Liga",
      "rank": 275,
      "prev_rank": 268,
      "off": 1.1,
      "def": 1.3,
      "spi": 39.5
   },
   {
      "name": "Pacos Ferreira",
      "league": "Portuguese Liga",
      "rank": 276,
      "prev_rank": 271,
      "off": 1.1,
      "def": 1.3,
      "spi": 39.5
   },
   {
      "name": "Gimnástic Tarragona",
      "league": "Spanish Segunda Division",
      "rank": 277,
      "prev_rank": 302,
      "off": 1,
      "def": 1.3,
      "spi": 39.4
   },
   {
      "name": "Jahn Regensburg",
      "league": "German 2. Bundesliga",
      "rank": 278,
      "prev_rank": 293,
      "off": 1.4,
      "def": 1.7,
      "spi": 39.4
   },
   {
      "name": "Belenenses",
      "league": "Portuguese Liga",
      "rank": 279,
      "prev_rank": 281,
      "off": 1,
      "def": 1.2,
      "spi": 39.3
   },
   {
      "name": "Eintracht Braunschweig",
      "league": "German 2. Bundesliga",
      "rank": 280,
      "prev_rank": 272,
      "off": 1.1,
      "def": 1.4,
      "spi": 39.3
   },
   {
      "name": "Vitesse",
      "league": "Dutch Eredivisie",
      "rank": 281,
      "prev_rank": 261,
      "off": 1.3,
      "def": 1.6,
      "spi": 39.3
   },
   {
      "name": "Verona",
      "league": "Italy Serie A",
      "rank": 282,
      "prev_rank": 285,
      "off": 1.2,
      "def": 1.4,
      "spi": 39.3
   },
   {
      "name": "Sarpsborg",
      "league": "Norwegian Tippeligaen",
      "rank": 283,
      "prev_rank": 279,
      "off": 1.3,
      "def": 1.6,
      "spi": 39.2
   },
   {
      "name": "IFK Norrkoping",
      "league": "Swedish Allsvenskan",
      "rank": 284,
      "prev_rank": 277,
      "off": 1.3,
      "def": 1.6,
      "spi": 39.2
   },
   {
      "name": "Lanus",
      "league": "Argentina Primera Division",
      "rank": 285,
      "prev_rank": 282,
      "off": 1.1,
      "def": 1.3,
      "spi": 39.2
   },
   {
      "name": "SK Brann",
      "league": "Norwegian Tippeligaen",
      "rank": 286,
      "prev_rank": 284,
      "off": 1.2,
      "def": 1.5,
      "spi": 39
   },
   {
      "name": "Ponte Preta",
      "league": "Brasileiro Série A",
      "rank": 287,
      "prev_rank": 286,
      "off": 1.1,
      "def": 1.3,
      "spi": 38.9
   },
   {
      "name": "FC Sheriff Tiraspol",
      "league": "UEFA Europa League",
      "rank": 288,
      "prev_rank": 288,
      "off": 1.1,
      "def": 1.4,
      "spi": 38.9
   },
   {
      "name": "Boavista",
      "league": "Portuguese Liga",
      "rank": 289,
      "prev_rank": 287,
      "off": 1,
      "def": 1.2,
      "spi": 38.9
   },
   {
      "name": "Grasshoppers Zürich",
      "league": "Swiss Raiffeisen Super League",
      "rank": 290,
      "prev_rank": 305,
      "off": 1.1,
      "def": 1.4,
      "spi": 38.9
   },
   {
      "name": "Reus Deportiu",
      "league": "Spanish Segunda Division",
      "rank": 291,
      "prev_rank": 307,
      "off": 0.8,
      "def": 1,
      "spi": 38.9
   },
   {
      "name": "Ankaraspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 292,
      "prev_rank": 270,
      "off": 1.2,
      "def": 1.4,
      "spi": 38.8
   },
   {
      "name": "New York Red Bulls",
      "league": "Major League Soccer",
      "rank": 293,
      "prev_rank": 291,
      "off": 1.3,
      "def": 1.6,
      "spi": 38.8
   },
   {
      "name": "San Martin San Juan",
      "league": "Argentina Primera Division",
      "rank": 294,
      "prev_rank": 294,
      "off": 1.1,
      "def": 1.3,
      "spi": 38.8
   },
   {
      "name": "SV Sandhausen",
      "league": "German 2. Bundesliga",
      "rank": 295,
      "prev_rank": 303,
      "off": 1,
      "def": 1.3,
      "spi": 38.7
   },
   {
      "name": "Almeria",
      "league": "Spanish Segunda Division",
      "rank": 296,
      "prev_rank": 316,
      "off": 1,
      "def": 1.2,
      "spi": 38.7
   },
   {
      "name": "Sivasspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 297,
      "prev_rank": 221,
      "off": 1.2,
      "def": 1.5,
      "spi": 38.5
   },
   {
      "name": "Avaí",
      "league": "Brasileiro Série A",
      "rank": 298,
      "prev_rank": 297,
      "off": 1.1,
      "def": 1.4,
      "spi": 38.5
   },
   {
      "name": "Puebla",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 299,
      "prev_rank": 269,
      "off": 1.1,
      "def": 1.4,
      "spi": 38.2
   },
   {
      "name": "Thun",
      "league": "Swiss Raiffeisen Super League",
      "rank": 300,
      "prev_rank": 317,
      "off": 1.4,
      "def": 1.8,
      "spi": 38.2
   },
   {
      "name": "Dynamo Dresden",
      "league": "German 2. Bundesliga",
      "rank": 301,
      "prev_rank": 314,
      "off": 1.2,
      "def": 1.6,
      "spi": 38.1
   },
   {
      "name": "Willem II",
      "league": "Dutch Eredivisie",
      "rank": 302,
      "prev_rank": 283,
      "off": 1.4,
      "def": 1.8,
      "spi": 38
   },
   {
      "name": "Gimnasia La Plata",
      "league": "Argentina Primera Division",
      "rank": 303,
      "prev_rank": 267,
      "off": 1,
      "def": 1.3,
      "spi": 37.9
   },
   {
      "name": "Lobos de la BUAP",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 304,
      "prev_rank": 298,
      "off": 1.3,
      "def": 1.6,
      "spi": 37.9
   },
   {
      "name": "Tondela",
      "league": "Portuguese Liga",
      "rank": 305,
      "prev_rank": 308,
      "off": 1.1,
      "def": 1.4,
      "spi": 37.9
   },
   {
      "name": "FC Groningen",
      "league": "Dutch Eredivisie",
      "rank": 306,
      "prev_rank": 318,
      "off": 1.3,
      "def": 1.7,
      "spi": 37.7
   },
   {
      "name": "Vitoria Setubal",
      "league": "Portuguese Liga",
      "rank": 307,
      "prev_rank": 321,
      "off": 1.1,
      "def": 1.5,
      "spi": 37.6
   },
   {
      "name": "Fortuna Düsseldorf",
      "league": "German 2. Bundesliga",
      "rank": 308,
      "prev_rank": 312,
      "off": 1.2,
      "def": 1.6,
      "spi": 37.6
   },
   {
      "name": "Brest",
      "league": "French Ligue 2",
      "rank": 309,
      "prev_rank": 333,
      "off": 1.1,
      "def": 1.4,
      "spi": 37.6
   },
   {
      "name": "Chacarita Juniors",
      "league": "Argentina Primera Division",
      "rank": 310,
      "prev_rank": 347,
      "off": 1.1,
      "def": 1.4,
      "spi": 37.5
   },
   {
      "name": "Patronato",
      "league": "Argentina Primera Division",
      "rank": 311,
      "prev_rank": 329,
      "off": 1,
      "def": 1.3,
      "spi": 37.4
   },
   {
      "name": "FC Tosno",
      "league": "Russian Premier Liga",
      "rank": 312,
      "prev_rank": 325,
      "off": 1.1,
      "def": 1.4,
      "spi": 37.4
   },
   {
      "name": "Moreirense",
      "league": "Portuguese Liga",
      "rank": 313,
      "prev_rank": 319,
      "off": 1,
      "def": 1.3,
      "spi": 37.3
   },
   {
      "name": "Cordoba",
      "league": "Spanish Segunda Division",
      "rank": 314,
      "prev_rank": 330,
      "off": 1.2,
      "def": 1.6,
      "spi": 37.3
   },
   {
      "name": "León",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 315,
      "prev_rank": 306,
      "off": 1.3,
      "def": 1.7,
      "spi": 37.3
   },
   {
      "name": "Norwich City",
      "league": "English League Championship",
      "rank": 316,
      "prev_rank": 346,
      "off": 1.2,
      "def": 1.5,
      "spi": 37.2
   },
   {
      "name": "Apollon Limassol",
      "league": "UEFA Europa League",
      "rank": 317,
      "prev_rank": 322,
      "off": 1.1,
      "def": 1.4,
      "spi": 37.2
   },
   {
      "name": "Bristol City",
      "league": "English League Championship",
      "rank": 318,
      "prev_rank": 313,
      "off": 1.1,
      "def": 1.5,
      "spi": 37.2
   },
   {
      "name": "Foggia",
      "league": "Italy Serie B",
      "rank": 319,
      "prev_rank": 391,
      "off": 1.2,
      "def": 1.6,
      "spi": 37.1
   },
   {
      "name": "AD Alcorcon",
      "league": "Spanish Segunda Division",
      "rank": 320,
      "prev_rank": 292,
      "off": 0.9,
      "def": 1.2,
      "spi": 37.1
   },
   {
      "name": "Atlas",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 321,
      "prev_rank": 334,
      "off": 1.2,
      "def": 1.6,
      "spi": 37
   },
   {
      "name": "Heerenveen",
      "league": "Dutch Eredivisie",
      "rank": 322,
      "prev_rank": 315,
      "off": 1.3,
      "def": 1.7,
      "spi": 37
   },
   {
      "name": "Seattle Sounders FC",
      "league": "Major League Soccer",
      "rank": 323,
      "prev_rank": 327,
      "off": 1.1,
      "def": 1.4,
      "spi": 36.9
   },
   {
      "name": "IFK Goteborg",
      "league": "Swedish Allsvenskan",
      "rank": 324,
      "prev_rank": 301,
      "off": 1.2,
      "def": 1.6,
      "spi": 36.7
   },
   {
      "name": "Paris FC",
      "league": "French Ligue 2",
      "rank": 325,
      "prev_rank": 300,
      "off": 0.9,
      "def": 1.2,
      "spi": 36.7
   },
   {
      "name": "Le Havre",
      "league": "French Ligue 2",
      "rank": 326,
      "prev_rank": 331,
      "off": 0.9,
      "def": 1.2,
      "spi": 36.7
   },
   {
      "name": "Estoril Praia",
      "league": "Portuguese Liga",
      "rank": 327,
      "prev_rank": 336,
      "off": 1.1,
      "def": 1.5,
      "spi": 36.6
   },
   {
      "name": "SpVgg Greuther Fürth",
      "league": "German 2. Bundesliga",
      "rank": 328,
      "prev_rank": 324,
      "off": 1,
      "def": 1.4,
      "spi": 36.6
   },
   {
      "name": "Goztepe",
      "league": "Turkish Turkcell Super Lig",
      "rank": 329,
      "prev_rank": 311,
      "off": 1.1,
      "def": 1.6,
      "spi": 36.5
   },
   {
      "name": "Queens Park Rangers",
      "league": "English League Championship",
      "rank": 330,
      "prev_rank": 299,
      "off": 1.2,
      "def": 1.6,
      "spi": 36.5
   },
   {
      "name": "Arsenal Sarandi",
      "league": "Argentina Primera Division",
      "rank": 331,
      "prev_rank": 328,
      "off": 0.9,
      "def": 1.3,
      "spi": 36.3
   },
   {
      "name": "Desportivo Aves",
      "league": "Portuguese Liga",
      "rank": 332,
      "prev_rank": 337,
      "off": 1.1,
      "def": 1.5,
      "spi": 36
   },
   {
      "name": "FC St. Pauli",
      "league": "German 2. Bundesliga",
      "rank": 333,
      "prev_rank": 335,
      "off": 1.1,
      "def": 1.6,
      "spi": 35.9
   },
   {
      "name": "Bursaspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 334,
      "prev_rank": 323,
      "off": 1,
      "def": 1.4,
      "spi": 35.8
   },
   {
      "name": "Aberdeen",
      "league": "Scottish Premiership",
      "rank": 335,
      "prev_rank": 296,
      "off": 1.1,
      "def": 1.5,
      "spi": 35.7
   },
   {
      "name": "Lausanne Sports",
      "league": "Swiss Raiffeisen Super League",
      "rank": 336,
      "prev_rank": 309,
      "off": 1.3,
      "def": 1.7,
      "spi": 35.6
   },
   {
      "name": "Feirense",
      "league": "Portuguese Liga",
      "rank": 337,
      "prev_rank": 356,
      "off": 1,
      "def": 1.4,
      "spi": 35.5
   },
   {
      "name": "Hammarby",
      "league": "Swedish Allsvenskan",
      "rank": 338,
      "prev_rank": 357,
      "off": 1.2,
      "def": 1.7,
      "spi": 35.5
   },
   {
      "name": "IF Elfsborg",
      "league": "Swedish Allsvenskan",
      "rank": 339,
      "prev_rank": 332,
      "off": 1.4,
      "def": 1.9,
      "spi": 35.4
   },
   {
      "name": "Vardar",
      "league": "UEFA Europa League",
      "rank": 340,
      "prev_rank": 344,
      "off": 1.2,
      "def": 1.7,
      "spi": 35.4
   },
   {
      "name": "Hibernian",
      "league": "Scottish Premiership",
      "rank": 341,
      "prev_rank": 339,
      "off": 1,
      "def": 1.5,
      "spi": 35.3
   },
   {
      "name": "Temperley",
      "league": "Argentina Primera Division",
      "rank": 342,
      "prev_rank": 348,
      "off": 0.9,
      "def": 1.4,
      "spi": 35.1
   },
   {
      "name": "Bari",
      "league": "Italy Serie B",
      "rank": 343,
      "prev_rank": 341,
      "off": 1,
      "def": 1.4,
      "spi": 35.1
   },
   {
      "name": "F.B.C Unione Venezia",
      "league": "Italy Serie B",
      "rank": 344,
      "prev_rank": 320,
      "off": 1,
      "def": 1.4,
      "spi": 35.1
   },
   {
      "name": "Portland Timbers",
      "league": "Major League Soccer",
      "rank": 345,
      "prev_rank": 343,
      "off": 1.2,
      "def": 1.7,
      "spi": 35.1
   },
   {
      "name": "Pumas Unam",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 346,
      "prev_rank": 349,
      "off": 1.1,
      "def": 1.6,
      "spi": 35
   },
   {
      "name": "Lens",
      "league": "French Ligue 2",
      "rank": 347,
      "prev_rank": 340,
      "off": 0.9,
      "def": 1.3,
      "spi": 35
   },
   {
      "name": "Kayserispor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 348,
      "prev_rank": 310,
      "off": 1.1,
      "def": 1.6,
      "spi": 34.9
   },
   {
      "name": "Spezia",
      "league": "Italy Serie B",
      "rank": 349,
      "prev_rank": 352,
      "off": 0.8,
      "def": 1.2,
      "spi": 34.9
   },
   {
      "name": "Sporting Kansas City",
      "league": "Major League Soccer",
      "rank": 350,
      "prev_rank": 360,
      "off": 1.1,
      "def": 1.5,
      "spi": 34.8
   },
   {
      "name": "MSV Duisburg",
      "league": "German 2. Bundesliga",
      "rank": 351,
      "prev_rank": 350,
      "off": 1.2,
      "def": 1.7,
      "spi": 34.7
   },
   {
      "name": "Lugo",
      "league": "Spanish Segunda Division",
      "rank": 352,
      "prev_rank": 342,
      "off": 0.9,
      "def": 1.4,
      "spi": 34.7
   },
   {
      "name": "FC Lugano",
      "league": "Swiss Raiffeisen Super League",
      "rank": 353,
      "prev_rank": 345,
      "off": 1,
      "def": 1.5,
      "spi": 34.4
   },
   {
      "name": "Columbus Crew",
      "league": "Major League Soccer",
      "rank": 354,
      "prev_rank": 358,
      "off": 1,
      "def": 1.6,
      "spi": 34
   },
   {
      "name": "Auxerre",
      "league": "French Ligue 2",
      "rank": 355,
      "prev_rank": 326,
      "off": 1.1,
      "def": 1.6,
      "spi": 34
   },
   {
      "name": "Tromso",
      "league": "Norwegian Tippeligaen",
      "rank": 356,
      "prev_rank": 405,
      "off": 1.3,
      "def": 1.9,
      "spi": 34
   },
   {
      "name": "Skenderbeu Korce",
      "league": "UEFA Europa League",
      "rank": 357,
      "prev_rank": 359,
      "off": 1.1,
      "def": 1.6,
      "spi": 33.8
   },
   {
      "name": "Querétaro",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 358,
      "prev_rank": 351,
      "off": 1,
      "def": 1.5,
      "spi": 33.8
   },
   {
      "name": "ADO Den Haag",
      "league": "Dutch Eredivisie",
      "rank": 359,
      "prev_rank": 378,
      "off": 1.2,
      "def": 1.7,
      "spi": 33.7
   },
   {
      "name": "1. FC Heidenheim 1846",
      "league": "German 2. Bundesliga",
      "rank": 360,
      "prev_rank": 362,
      "off": 1.2,
      "def": 1.8,
      "spi": 33.2
   },
   {
      "name": "1. FC Kaiserslautern",
      "league": "German 2. Bundesliga",
      "rank": 361,
      "prev_rank": 354,
      "off": 1.1,
      "def": 1.7,
      "spi": 33.2
   },
   {
      "name": "Ipswich Town",
      "league": "English League Championship",
      "rank": 362,
      "prev_rank": 364,
      "off": 0.9,
      "def": 1.4,
      "spi": 33.1
   },
   {
      "name": "Birmingham",
      "league": "English League Championship",
      "rank": 363,
      "prev_rank": 365,
      "off": 1,
      "def": 1.6,
      "spi": 33.1
   },
   {
      "name": "FC Barcelona II",
      "league": "Spanish Segunda Division",
      "rank": 364,
      "prev_rank": 353,
      "off": 1.1,
      "def": 1.6,
      "spi": 33
   },
   {
      "name": "Erzgebirge Aue",
      "league": "German 2. Bundesliga",
      "rank": 365,
      "prev_rank": 366,
      "off": 1,
      "def": 1.6,
      "spi": 32.9
   },
   {
      "name": "NAC",
      "league": "Dutch Eredivisie",
      "rank": 366,
      "prev_rank": 370,
      "off": 1.1,
      "def": 1.7,
      "spi": 32.9
   },
   {
      "name": "Cultural Leonesa",
      "league": "Spanish Segunda Division",
      "rank": 367,
      "prev_rank": 384,
      "off": 1,
      "def": 1.6,
      "spi": 32.8
   },
   {
      "name": "PEC Zwolle",
      "league": "Dutch Eredivisie",
      "rank": 368,
      "prev_rank": 361,
      "off": 1.2,
      "def": 1.8,
      "spi": 32.6
   },
   {
      "name": "Barnsley",
      "league": "English League Championship",
      "rank": 369,
      "prev_rank": 368,
      "off": 1,
      "def": 1.7,
      "spi": 32.2
   },
   {
      "name": "Kilmarnock",
      "league": "Scottish Premiership",
      "rank": 370,
      "prev_rank": 377,
      "off": 1,
      "def": 1.6,
      "spi": 32.1
   },
   {
      "name": "Cesena",
      "league": "Italy Serie B",
      "rank": 371,
      "prev_rank": 399,
      "off": 1.1,
      "def": 1.7,
      "spi": 32.1
   },
   {
      "name": "Chateauroux",
      "league": "French Ligue 2",
      "rank": 372,
      "prev_rank": 355,
      "off": 1,
      "def": 1.6,
      "spi": 31.9
   },
   {
      "name": "Excelsior",
      "league": "Dutch Eredivisie",
      "rank": 373,
      "prev_rank": 387,
      "off": 1.2,
      "def": 1.8,
      "spi": 31.7
   },
   {
      "name": "Chicago Fire",
      "league": "Major League Soccer",
      "rank": 374,
      "prev_rank": 374,
      "off": 1.1,
      "def": 1.8,
      "spi": 31.5
   },
   {
      "name": "Los Angeles FC",
      "league": "Major League Soccer",
      "rank": 375,
      "prev_rank": 363,
      "off": 1.2,
      "def": 1.8,
      "spi": 31.5
   },
   {
      "name": "Cittadella",
      "league": "Italy Serie B",
      "rank": 376,
      "prev_rank": 338,
      "off": 1,
      "def": 1.6,
      "spi": 31.4
   },
   {
      "name": "Kristiansund BK",
      "league": "Norwegian Tippeligaen",
      "rank": 377,
      "prev_rank": 371,
      "off": 1.1,
      "def": 1.8,
      "spi": 31.4
   },
   {
      "name": "Cashpoint SC Rheindorf Altach",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 378,
      "prev_rank": 369,
      "off": 0.8,
      "def": 1.4,
      "spi": 31.3
   },
   {
      "name": "Philadelphia Union",
      "league": "Major League Soccer",
      "rank": 379,
      "prev_rank": 381,
      "off": 1,
      "def": 1.7,
      "spi": 31.2
   },
   {
      "name": "New England Revolution",
      "league": "Major League Soccer",
      "rank": 380,
      "prev_rank": 400,
      "off": 1.1,
      "def": 1.8,
      "spi": 31.2
   },
   {
      "name": "Sheffield Wednesday",
      "league": "English League Championship",
      "rank": 381,
      "prev_rank": 367,
      "off": 1.1,
      "def": 1.8,
      "spi": 31.1
   },
   {
      "name": "Haugesund",
      "league": "Norwegian Tippeligaen",
      "rank": 382,
      "prev_rank": 379,
      "off": 1,
      "def": 1.6,
      "spi": 31
   },
   {
      "name": "Veracruz",
      "league": "Mexican Primera Division Torneo Apertura",
      "rank": 383,
      "prev_rank": 389,
      "off": 0.9,
      "def": 1.5,
      "spi": 31
   },
   {
      "name": "Los Angeles Galaxy",
      "league": "Major League Soccer",
      "rank": 384,
      "prev_rank": 373,
      "off": 1.1,
      "def": 1.8,
      "spi": 31
   },
   {
      "name": "Heracles",
      "league": "Dutch Eredivisie",
      "rank": 385,
      "prev_rank": 385,
      "off": 1.2,
      "def": 1.9,
      "spi": 30.9
   },
   {
      "name": "FC Dallas",
      "league": "Major League Soccer",
      "rank": 386,
      "prev_rank": 380,
      "off": 1,
      "def": 1.7,
      "spi": 30.9
   },
   {
      "name": "Leeds United",
      "league": "English League Championship",
      "rank": 387,
      "prev_rank": 376,
      "off": 1.1,
      "def": 1.8,
      "spi": 30.6
   },
   {
      "name": "Novara",
      "league": "Italy Serie B",
      "rank": 388,
      "prev_rank": 390,
      "off": 0.8,
      "def": 1.4,
      "spi": 30.5
   },
   {
      "name": "Nottingham Forest",
      "league": "English League Championship",
      "rank": 389,
      "prev_rank": 382,
      "off": 0.9,
      "def": 1.5,
      "spi": 30.4
   },
   {
      "name": "Hearts",
      "league": "Scottish Premiership",
      "rank": 390,
      "prev_rank": 410,
      "off": 0.8,
      "def": 1.4,
      "spi": 30
   },
   {
      "name": "Olimpo",
      "league": "Argentina Primera Division",
      "rank": 391,
      "prev_rank": 383,
      "off": 0.9,
      "def": 1.6,
      "spi": 29.8
   },
   {
      "name": "Sochaux",
      "league": "French Ligue 2",
      "rank": 392,
      "prev_rank": 395,
      "off": 1,
      "def": 1.8,
      "spi": 29.6
   },
   {
      "name": "Houston Dynamo",
      "league": "Major League Soccer",
      "rank": 393,
      "prev_rank": 392,
      "off": 1,
      "def": 1.8,
      "spi": 29.5
   },
   {
      "name": "Valerenga",
      "league": "Norwegian Tippeligaen",
      "rank": 394,
      "prev_rank": 375,
      "off": 1.2,
      "def": 2,
      "spi": 29.5
   },
   {
      "name": "Salernitana",
      "league": "Italy Serie B",
      "rank": 395,
      "prev_rank": 402,
      "off": 0.8,
      "def": 1.5,
      "spi": 29.3
   },
   {
      "name": "Virtus Entella",
      "league": "Italy Serie B",
      "rank": 396,
      "prev_rank": 372,
      "off": 0.7,
      "def": 1.4,
      "spi": 29.1
   },
   {
      "name": "Orebro SK",
      "league": "Swedish Allsvenskan",
      "rank": 397,
      "prev_rank": 407,
      "off": 1,
      "def": 1.8,
      "spi": 29
   },
   {
      "name": "Energiya Khabarovsk",
      "league": "Russian Premier Liga",
      "rank": 398,
      "prev_rank": 386,
      "off": 0.9,
      "def": 1.7,
      "spi": 28.7
   },
   {
      "name": "Brescia",
      "league": "Italy Serie B",
      "rank": 399,
      "prev_rank": 418,
      "off": 0.8,
      "def": 1.6,
      "spi": 28.6
   },
   {
      "name": "Stabaek",
      "league": "Norwegian Tippeligaen",
      "rank": 400,
      "prev_rank": 403,
      "off": 1.2,
      "def": 2,
      "spi": 28.6
   },
   {
      "name": "Montreal Impact",
      "league": "Major League Soccer",
      "rank": 401,
      "prev_rank": 388,
      "off": 1,
      "def": 1.9,
      "spi": 28.2
   },
   {
      "name": "Avellino",
      "league": "Italy Serie B",
      "rank": 402,
      "prev_rank": 425,
      "off": 0.9,
      "def": 1.7,
      "spi": 28
   },
   {
      "name": "FC Twente",
      "league": "Dutch Eredivisie",
      "rank": 403,
      "prev_rank": 401,
      "off": 1,
      "def": 1.9,
      "spi": 27.9
   },
   {
      "name": "US Quevilly",
      "league": "French Ligue 2",
      "rank": 404,
      "prev_rank": 398,
      "off": 1,
      "def": 1.8,
      "spi": 27.9
   },
   {
      "name": "Kalmar FF",
      "league": "Swedish Allsvenskan",
      "rank": 405,
      "prev_rank": 411,
      "off": 0.8,
      "def": 1.6,
      "spi": 27.8
   },
   {
      "name": "Lillestrom",
      "league": "Norwegian Tippeligaen",
      "rank": 406,
      "prev_rank": 408,
      "off": 1,
      "def": 1.8,
      "spi": 27.7
   },
   {
      "name": "Sunderland",
      "league": "English League Championship",
      "rank": 407,
      "prev_rank": 413,
      "off": 1,
      "def": 1.9,
      "spi": 27.6
   },
   {
      "name": "Vancouver Whitecaps",
      "league": "Major League Soccer",
      "rank": 408,
      "prev_rank": 409,
      "off": 0.9,
      "def": 1.7,
      "spi": 27.6
   },
   {
      "name": "Orléans",
      "league": "French Ligue 2",
      "rank": 409,
      "prev_rank": 404,
      "off": 1,
      "def": 1.9,
      "spi": 27.6
   },
   {
      "name": "Orlando City SC",
      "league": "Major League Soccer",
      "rank": 410,
      "prev_rank": 416,
      "off": 1,
      "def": 1.9,
      "spi": 27.6
   },
   {
      "name": "Ternana",
      "league": "Italy Serie B",
      "rank": 411,
      "prev_rank": 438,
      "off": 1.1,
      "def": 2,
      "spi": 27.4
   },
   {
      "name": "Bolton",
      "league": "English League Championship",
      "rank": 412,
      "prev_rank": 396,
      "off": 0.8,
      "def": 1.6,
      "spi": 27.4
   },
   {
      "name": "Real Salt Lake",
      "league": "Major League Soccer",
      "rank": 413,
      "prev_rank": 394,
      "off": 1.1,
      "def": 1.9,
      "spi": 27.4
   },
   {
      "name": "Roda JC",
      "league": "Dutch Eredivisie",
      "rank": 414,
      "prev_rank": 422,
      "off": 1.1,
      "def": 2,
      "spi": 27.3
   },
   {
      "name": "VVV Venlo",
      "league": "Dutch Eredivisie",
      "rank": 415,
      "prev_rank": 406,
      "off": 0.9,
      "def": 1.7,
      "spi": 27.2
   },
   {
      "name": "Sogndal",
      "league": "Norwegian Tippeligaen",
      "rank": 416,
      "prev_rank": 412,
      "off": 1,
      "def": 1.9,
      "spi": 27.2
   },
   {
      "name": "Halmstads BK",
      "league": "Swedish Allsvenskan",
      "rank": 417,
      "prev_rank": 414,
      "off": 0.9,
      "def": 1.7,
      "spi": 27.1
   },
   {
      "name": "Carpi",
      "league": "Italy Serie B",
      "rank": 418,
      "prev_rank": 393,
      "off": 0.6,
      "def": 1.3,
      "spi": 27.1
   },
   {
      "name": "Reading",
      "league": "English League Championship",
      "rank": 419,
      "prev_rank": 420,
      "off": 0.9,
      "def": 1.8,
      "spi": 26.9
   },
   {
      "name": "Aalesund",
      "league": "Norwegian Tippeligaen",
      "rank": 420,
      "prev_rank": 419,
      "off": 1.1,
      "def": 2.1,
      "spi": 26.3
   },
   {
      "name": "Dalkurd FF",
      "league": "Swedish Allsvenskan",
      "rank": 421,
      "prev_rank": 445,
      "off": 1,
      "def": 1.9,
      "spi": 26.2
   },
   {
      "name": "DC United",
      "league": "Major League Soccer",
      "rank": 422,
      "prev_rank": 421,
      "off": 0.9,
      "def": 1.9,
      "spi": 26.2
   },
   {
      "name": "AS Nancy Lorraine",
      "league": "French Ligue 2",
      "rank": 423,
      "prev_rank": 427,
      "off": 0.7,
      "def": 1.5,
      "spi": 25.9
   },
   {
      "name": "Jonkopings Sodra IF",
      "league": "Swedish Allsvenskan",
      "rank": 424,
      "prev_rank": 423,
      "off": 0.8,
      "def": 1.6,
      "spi": 25.8
   },
   {
      "name": "US Pescara",
      "league": "Italy Serie B",
      "rank": 425,
      "prev_rank": 431,
      "off": 0.8,
      "def": 1.7,
      "spi": 25.7
   },
   {
      "name": "Niort",
      "league": "French Ligue 2",
      "rank": 426,
      "prev_rank": 432,
      "off": 0.9,
      "def": 1.8,
      "spi": 25.7
   },
   {
      "name": "GFC Ajaccio",
      "league": "French Ligue 2",
      "rank": 427,
      "prev_rank": 440,
      "off": 0.8,
      "def": 1.6,
      "spi": 25.7
   },
   {
      "name": "Valenciennes",
      "league": "French Ligue 2",
      "rank": 428,
      "prev_rank": 417,
      "off": 0.9,
      "def": 1.9,
      "spi": 25.6
   },
   {
      "name": "Odd BK",
      "league": "Norwegian Tippeligaen",
      "rank": 429,
      "prev_rank": 426,
      "off": 0.8,
      "def": 1.7,
      "spi": 25.6
   },
   {
      "name": "GIF Sundsvall",
      "league": "Swedish Allsvenskan",
      "rank": 430,
      "prev_rank": 441,
      "off": 0.9,
      "def": 1.8,
      "spi": 25
   },
   {
      "name": "Ranheim",
      "league": "Norwegian Tippeligaen",
      "rank": 431,
      "prev_rank": 415,
      "off": 0.9,
      "def": 1.9,
      "spi": 25
   },
   {
      "name": "Colorado Rapids",
      "league": "Major League Soccer",
      "rank": 432,
      "prev_rank": 430,
      "off": 0.8,
      "def": 1.8,
      "spi": 25
   },
   {
      "name": "La Hoya Lorca",
      "league": "Spanish Segunda Division",
      "rank": 433,
      "prev_rank": 429,
      "off": 0.9,
      "def": 1.9,
      "spi": 24.9
   },
   {
      "name": "IK Sirius",
      "league": "Swedish Allsvenskan",
      "rank": 434,
      "prev_rank": 428,
      "off": 1.1,
      "def": 2.1,
      "spi": 24.9
   },
   {
      "name": "Cremonese",
      "league": "Italy Serie B",
      "rank": 435,
      "prev_rank": 397,
      "off": 0.7,
      "def": 1.5,
      "spi": 24.9
   },
   {
      "name": "Sparta",
      "league": "Dutch Eredivisie",
      "rank": 436,
      "prev_rank": 442,
      "off": 1,
      "def": 2.1,
      "spi": 24
   },
   {
      "name": "Tours",
      "league": "French Ligue 2",
      "rank": 437,
      "prev_rank": 437,
      "off": 0.8,
      "def": 1.8,
      "spi": 23.8
   },
   {
      "name": "San Jose Earthquakes",
      "league": "Major League Soccer",
      "rank": 438,
      "prev_rank": 433,
      "off": 0.9,
      "def": 2,
      "spi": 23.8
   },
   {
      "name": "Ascoli",
      "league": "Italy Serie B",
      "rank": 439,
      "prev_rank": 439,
      "off": 0.8,
      "def": 1.7,
      "spi": 23.7
   },
   {
      "name": "Pro Vercelli",
      "league": "Italy Serie B",
      "rank": 440,
      "prev_rank": 435,
      "off": 0.7,
      "def": 1.7,
      "spi": 23.5
   },
   {
      "name": "Sevilla Atletico",
      "league": "Spanish Segunda Division",
      "rank": 441,
      "prev_rank": 434,
      "off": 0.8,
      "def": 1.9,
      "spi": 23.2
   },
   {
      "name": "Burton Albion",
      "league": "English League Championship",
      "rank": 442,
      "prev_rank": 424,
      "off": 0.8,
      "def": 1.9,
      "spi": 22.7
   },
   {
      "name": "Minnesota United FC",
      "league": "Major League Soccer",
      "rank": 443,
      "prev_rank": 443,
      "off": 0.9,
      "def": 2.1,
      "spi": 22.4
   },
   {
      "name": "Viking FK",
      "league": "Norwegian Tippeligaen",
      "rank": 444,
      "prev_rank": 444,
      "off": 0.9,
      "def": 2.1,
      "spi": 22.1
   },
   {
      "name": "Sandefjord",
      "league": "Norwegian Tippeligaen",
      "rank": 445,
      "prev_rank": 436,
      "off": 0.9,
      "def": 2.1,
      "spi": 22.1
   },
   {
      "name": "Trelleborgs FF",
      "league": "Swedish Allsvenskan",
      "rank": 446,
      "prev_rank": 446,
      "off": 0.8,
      "def": 2,
      "spi": 21.6
   },
   {
      "name": "Ross County",
      "league": "Scottish Premiership",
      "rank": 447,
      "prev_rank": 447,
      "off": 0.9,
      "def": 2.1,
      "spi": 21.5
   },
   {
      "name": "Bourg-Peronnas",
      "league": "French Ligue 2",
      "rank": 448,
      "prev_rank": 448,
      "off": 1,
      "def": 2.3,
      "spi": 21
   },
   {
      "name": "Bodo/Glimt",
      "league": "Norwegian Tippeligaen",
      "rank": 449,
      "prev_rank": 449,
      "off": 0.8,
      "def": 2,
      "spi": 20.4
   },
   {
      "name": "Hamilton Academical",
      "league": "Scottish Premiership",
      "rank": 450,
      "prev_rank": 453,
      "off": 0.8,
      "def": 2.2,
      "spi": 20
   },
   {
      "name": "Vasby United",
      "league": "Swedish Allsvenskan",
      "rank": 451,
      "prev_rank": 451,
      "off": 0.7,
      "def": 2,
      "spi": 20
   },
   {
      "name": "Motherwell",
      "league": "Scottish Premiership",
      "rank": 452,
      "prev_rank": 452,
      "off": 0.6,
      "def": 1.7,
      "spi": 19.6
   },
   {
      "name": "Brommapojkarna",
      "league": "Swedish Allsvenskan",
      "rank": 453,
      "prev_rank": 456,
      "off": 0.8,
      "def": 2.1,
      "spi": 19
   },
   {
      "name": "Wolfsberger AC",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 454,
      "prev_rank": 450,
      "off": 0.6,
      "def": 1.8,
      "spi": 18.9
   },
   {
      "name": "St Johnstone",
      "league": "Scottish Premiership",
      "rank": 455,
      "prev_rank": 454,
      "off": 0.6,
      "def": 1.8,
      "spi": 18.2
   },
   {
      "name": "Karabükspor",
      "league": "Turkish Turkcell Super Lig",
      "rank": 456,
      "prev_rank": 455,
      "off": 0.7,
      "def": 2.1,
      "spi": 17.3
   },
   {
      "name": "St. Pölten",
      "league": "Austrian T-Mobile Bundesliga",
      "rank": 457,
      "prev_rank": 458,
      "off": 0.7,
      "def": 2.2,
      "spi": 17.2
   },
   {
      "name": "IK Start",
      "league": "Norwegian Tippeligaen",
      "rank": 458,
      "prev_rank": 457,
      "off": 0.7,
      "def": 2.3,
      "spi": 16.1
   },
   {
      "name": "Dundee",
      "league": "Scottish Premiership",
      "rank": 459,
      "prev_rank": 459,
      "off": 0.5,
      "def": 2.1,
      "spi": 13.1
   },
   {
      "name": "Partick Thistle",
      "league": "Scottish Premiership",
      "rank": 460,
      "prev_rank": 460,
      "off": 0.3,
      "def": 2.1,
      "spi": 9.9
   }
]

module.exports = teamsData;
