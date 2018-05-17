<!DOCTYPE html>
<html>
<head>
    <title>Game List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#0050c5">
	<meta name="og:title" content="Game List">
	<meta name="og:description" content="List of Discord's verified games, with links and pictures.">
    <meta name="description" content="List of Discord's verified games, with links and pictures.">
	<meta name="og:image" content="https://cdn1.iconfinder.com/data/icons/devices-7/128/devices-19-512.png">
	<meta name="og:site_name" content="Bender Bot">
	<meta name="og:url" content="https://benderbot.co/">
    <style>
        html {
            margin: 20px !important;
        }
        .game {
            position:  relative;
        }
        .game-name {
            color: #fff;
            margin-left: 5px;
        }
        .game-desc {
            color: #bbb;
        }
        .game-icon {
            vertical-align: middle;
            height: 32px !important;
        }
        .game-splash {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.3;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
        .game-inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 20px;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.6.2/darkly/bulmaswatch.min.css">
</head>
<body>
    <div class="title has-text-centered">Here's a big-ass list of games.
        <i style="color: rgba(255,255,255,0.5);">Have fun!</i>
        <img src="https://discordapp.com/assets/b277c5ffb43011a356200198cf76b22d.svg" style="height:32px;vertical-align:middle;">
    </div>
    <div id="games" class="columns">
        <div class="column">
            <?php
            $data = file_get_contents("https://discordapp.com/api/v6/games");
            $games = json_decode($data, true);
            $middle = sizeof($games) / 2 - 17;
            $str = "";
            foreach ($games as $game) {
                $str .= '<div class="game box"';
                if (array_key_exists('splash' , $game) && $game['splash'] !== null) {
                    $str .= ' style="min-height: 300px;"><img class="game-splash" src="https://cdn.discordapp.com/game-assets/' . $game['id'] . '/' . $game['splash'] . '.png?size=512"><div class="game-inner"';
                }
                $str .= '>';
                $str .= array_key_exists('icon' , $game) && $game['icon'] !== null ? '<img class="game-icon" src="https://cdn.discordapp.com/game-assets/' . $game['id'] . '/' . $game['icon'] . '.png">' : '<img class="game-icon" src="https://discordapp.com/assets/a5eba102f5b5e413df2b65c73f288afa.svg">';
                $str .= '<span class="game-name">' . $game['name'] . '</span><br>';
                $str .= '<span class="game-desc">' . (array_key_exists('summary' , $game) ? $game['summary'] : 'No description provided.') . '</span><br>';
                if (array_key_exists('publishers' , $game)) {
                    $str .= '<br><span class="game-pub">Publisher: ' . $game['publishers'][0] . '</span>';
                }
                if (array_key_exists('distributor_games' , $game) && sizeof($game['distributor_games']) !== 0 && array_key_exists('distributor', $game['distributor_games'][0])) {
                    $str .= '<br>Available from ' . ucfirst($game['distributor_games'][0]['distributor']);
                    if ($game['distributor_games'][0]['distributor'] == 'steam' && $game['distributor_games'][0]['sku'] !== null)
                    $str .= ' (<a href="http://store.steampowered.com/app/' . $game['distributor_games'][0]['sku'] . '/" target="_blank">Store page</a>)';
                }
                $str .= '</div>';
                if (array_key_exists('splash' , $game) && $game['splash'] !== null) {
                    $str .= '</div>';
                }
                if ($game == $games[$middle]) {
                    $str .= '</div><div class="column">';
                }
            }
            echo $str;
            ?>
        </div>
    </div>
</body>
</html>
