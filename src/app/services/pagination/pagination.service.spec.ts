import { TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/models/movie.interface';

import { PaginationService } from './pagination.service';


const MOVIES: Movie[] = [
  {
    "id": "207856",
    "title": "2001: A Space Odyssey",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
    "synopsis": "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
    "rating": "8.3",
    "type": "movie",
    "released": "1968",
    "runtime": "2h28m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0062622",
    "download": "0"
  },
  {
    "id": "215318",
    "title": "Ace Ventura: When Nature Calls",
    "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
    "synopsis": "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>",
    "rating": "6.4",
    "type": "movie",
    "released": "1995",
    "runtime": "1h34m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0112281",
    "download": "1"
  },
  {
    "id": "234365",
    "title": "Against All Odds",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
    "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>",
    "rating": "5.9",
    "type": "movie",
    "released": "1984",
    "runtime": "2h1m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0086859",
    "download": "1"
  },
  {
    "id": "18002692",
    "title": "American History X",
    "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABet1M0odJ5zjsEwRnDSs-Kj_vi5WZC-9SH7lraHwERvmUuErGWd0neKOtWlcAi9tLlfJfwMJw4kraZsHyfWlG-PqnA.jpg?r=e28",
    "synopsis": "A neo-Nazi gets sent to prison for murder and comes out a changed man. But can he prevent his younger brother from following in his footsteps?<br><b>New on 2020-06-18</b>",
    "rating": "8.5",
    "type": "movie",
    "released": "1998",
    "runtime": "1h58m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbHt3NoFOvz3C4W44SvcUcNulmJZV6LpOj0P81LNU1I5VmtJkFnLz9fiz_gA71vaDytjDqocpe1ay7FJS3-mn5kvS4VT.jpg?r=e28",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0120586",
    "download": "0"
  },
  {
    "id": "60000880",
    "title": "28 Days",
    "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeHQaPEL1acetO9i5uD_8MOETxbr3yKdYzFhPzXmCRxB5yB6t2MD2JCJyvpi8BmPYfwtbwCZlTWWeA10-i-fbNE11Q.jpg?r=c89",
    "synopsis": "After her drunken antics result in property damage, an alcoholic journalist enters rehab -- and soon meets a fellow resident who changes her outlook.<br><b>New on 2020-06-18</b>",
    "rating": "6",
    "type": "movie",
    "released": "2000",
    "runtime": "1h43m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXaIScp1HGn2XPV82ivaARKyiMXJ0XN6FlgOe3tj1NM08vOc-ZUqCeQoXUHIWD4paV4xL3lj_Ez9kpfNvvQZKxNnn_tW.jpg?r=c89",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0191754",
    "download": "1"
  },
  {
    "id": "60001801",
    "title": "Alexandria ... Why?",
    "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcWlKXh6yeFKLwyLydH8C-jX47eCNCHvEjj8nQv6tYdBvwcrpw-Kgp-cj7h5prXAsA3EoT4G_c2lfIVohhZfwkvWmQ.jpg?r=3c0",
    "synopsis": "Living in Alexandria during World War II, an Egyptian teen enamored with American films dreams of making it in Hollywood.<br><b>New on 2020-06-18</b>",
    "rating": "",
    "type": "movie",
    "released": "1979",
    "runtime": "2h11m",
    "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdjwMEYmUDZBWnbMrWNl9lu8KtfwIhsh1RtT8VCguNHO7ceB5Jq1fpbw5JT0wtJVABatokA8Ol086UwT9c5BR2mq5HrR.jpg?r=f8f",
    "unogsdate": "2020-06-18",
    "imdbid": "",
    "download": "0"
  },
  {
    "id": "60001803",
    "title": "Alexandria: Again and Forever",
    "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcgOH1Rh9fuG_PQcc6gQSa74CutPlqlXPreH5-luT_yIRVjz1hyYLNXbdnpWUF1hBCtM6adwn41umryqveMJ05bqGA.jpg?r=8c7",
    "synopsis": "At the peak of his career, Yehia joins a hunger strike, becomes smitten and reckons with a creative crisis &mdash; but finds a new muse.<br><b>New on 2020-06-18</b>",
    "rating": "",
    "type": "movie",
    "released": "1989",
    "runtime": "1h49m",
    "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABf0WbQTW_smSdXEqGX-XQMBiNv1EkjMc4X-8uwkwe3fwmK-4AKSAy5I6-ml0FsXAiePG2KHM8mgvX81DVrtCquqfRLJj.jpg?r=0a0",
    "unogsdate": "2020-06-18",
    "imdbid": "",
    "download": "0"
  },
  {
    "id": "60002273",
    "title": "Along Came a Spider",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaulisu8YTwZbJxsJPQWfrX5ihDrsnTqAjomyyodEcbu4vNJQq-DkvhOqL3J3NPqAOb7dhPuw7h7ir_MreCL0Tzwhg.jpg?r=d2f",
    "synopsis": "When a girl is kidnapped from a prestigious prep school, a homicide detective takes the case, teaming up with young security agent.<br><b>New on 2020-06-18</b>",
    "rating": "6.4",
    "type": "movie",
    "released": "2001",
    "runtime": "1h43m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ51dexFQSmqtj9o7icMN9KQxOX_6X5iKom8Dve9pZuzhqEnx738Fu2u5X4_XLNpDIQsU7M-2weiz8HiL2RBIDekH42w.jpg?r=d2f",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0164334",
    "download": "0"
  },
  {
    "id": "60020681",
    "title": "Angel Eyes",
    "image": "https://occ-0-114-116.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABadHdWYsV2FwW7UfqVlwomKGrJ7atIA-DJCREWLmaWY0dP6UkehYv6W_fwRy4alZkAZBdvQckeQiwGDaE_1bRKv3ww.jpg?r=915",
    "synopsis": "When a violent assault leaves her vulnerable, a streetwise Chicago cop receives help from a haunted loner who&#39;s struggling with traumas of his own.<br><b>New on 2020-06-18</b>",
    "rating": "5.6",
    "type": "movie",
    "released": "2001",
    "runtime": "1h42m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW_zO3-lMcf3WjJ4Hki8uUAgMbAlCYj3TjQSNe6N9fGQdQFxaWSo48B6V6Vy8Hx8bhag-fxejhhVK7YNrKG6wh41o9Et.jpg?r=d58",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0225071",
    "download": "0"
  },
  {
    "id": "60027713",
    "title": "2 Fast 2 Furious",
    "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcPADEjySdmCNxJrnX6owPs92K-0NGAtcYnmtpNLqNsQTXglXWyTSo9MDTxUKFAYoEILjhAM0gNbxzanxRGjCoCc5g.jpg?r=ae6",
    "synopsis": "It&#39;s a major double-cross when former cop Brian teams up with his ex-con buddy to transport a shipment of &#39;dirty&#39; money for a shady importer-exporter.<br><b>New on 2020-06-18</b>",
    "rating": "5.9",
    "type": "movie",
    "released": "2003",
    "runtime": "1h47m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXWi8cWleYPwFmSJYzCdu4b8EalVrXaprZQvOgoA41Oau4m0IxZ8gEipVc0tNUxtdMaDT2zDMvNfJAeQU-MeXs3ky2l3.jpg?r=ae6",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0322259",
    "download": "1"
  },
  {
    "id": "70056440",
    "title": "300",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABa-TAz4e2e9CgSbKG-kVGKgw5AwwXOI2M_7-4RPACO_4uXn1oZ1BJvjF8xlExJ7_vInqnA5bQwTw9dhN9uPlVR3aNA.jpg?r=d41",
    "synopsis": "In 480 B.C., Spartan King Leonidas leads his small band of 300 soldiers against an army of more than 1 million during the Battle of Thermopylae.<br><b>New on 2020-06-18</b>",
    "rating": "7.5",
    "type": "movie",
    "released": "2007",
    "runtime": "1h56m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQwyw3OcOEofXg58axFS5yT7qmUmTpw1HaGpzO_Q-qTqdt7GcksiptQ_YorLxQThDP9lL4SPo0hOCSvNYgCtbhHdu-rK.jpg?r=d41",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0892737",
    "download": "1"
  },
  {
    "id": "70084788",
    "title": "21",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVJASHjnyFMKool7h8ecHhx8K_C_w5zrE8cEoTA50e9IW2ZHdyW5_cFrt3GwHNAnoHEbX9lNP9iNbnQryb3x7G9ybg.jpg?r=b4b",
    "synopsis": "A brilliant group of students become card-counting experts with the intent of swindling millions out of Las Vegas casinos by playing blackjack.<br><b>New on 2020-06-18</b>",
    "rating": "6.8",
    "type": "movie",
    "released": "2008",
    "runtime": "2h2m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRQXpSvT8urY69yyLsO04yi1frmMJOOjHr3CQfzYWlzqeOEruZmLCEv5j0gKONwaMtkMS8hxpWTv6TjWIGlyJ64ZSpDS.jpg?r=b4b",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0478087",
    "download": "1"
  },
  {
    "id": "70105125",
    "title": "Ace Ventura Pet Detective Jr.",
    "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcbXLQyib-FJD5nc1bafncSplOBeQD7ZTdOR8q3xR0QOSpFvwO1RW9Cy3iIqgyP4Un6VZ6bLiy60e_R1FY93AeDY8Q.jpg?r=d67",
    "synopsis": "A pet detective like his long-missing father, seventh-grader Ace Ventura Jr. springs into action when his mom is accused of stealing a panda.<br><b>New on 2020-06-18</b>",
    "rating": "2.1",
    "type": "movie",
    "released": "2009",
    "runtime": "1h33m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXgn3unsJ1rGSNZWbpbiLDYBcrdSQP_kdkUGCeKw90LReF0iyIXZNT3uhE3pIFXQCSRnCVR_R-Z9lzJ-0ecKeFz9dbiT.jpg?r=d55",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0844029",
    "download": "0"
  },
  {
    "id": "70107406",
    "title": "17 Again",
    "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeN2_KkkQ-7AxhN-MvKXkYoXPqH0k9eAPt0lMHnekZOXU9vtgPMITk9T7sArll4j7JVk13zy3fj09Ir3trq89UGAZw.jpg?r=5f8",
    "synopsis": "Nearing a midlife crisis, thirty-something Mike wishes for a &#39;do-over&#39; -- and that&#39;s exactly what he gets when he wakes up to find he&#39;s 17 again.<br><b>New on 2020-06-18</b>",
    "rating": "6.3",
    "type": "movie",
    "released": "2009",
    "runtime": "1h41m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfx1cr_u2HHBhfwNeu3UtDpd9vPFYxXiNWOb02IC28SuZVWCqdK8hqNsIjEvRUstFmsvzNQD3jBUhf-m-rWmIrdjnQ16.jpg?r=14b",
    "unogsdate": "2020-06-18",
    "imdbid": "tt0974661",
    "download": "1"
  },
  {
    "id": "70231922",
    "title": "Argo",
    "image": "https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAAAfBQhJMplmFnwNMpMywfujTkrOBGNCltQqXM9nP8dINSP5NloaH8A8gvQUO6_7mplrTT2kAnH8tdIikNooq4D-AOng.jpg?r=e37",
    "synopsis": "In 1979, six Americans take shelter from Iranian militants in the Canadian embassy, prompting the CIA to concoct an elaborate plot to rescue them.<br><b>New on 2020-06-18</b>",
    "rating": "7.7",
    "type": "movie",
    "released": "2012",
    "runtime": "2h0m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUKJCgyWk-qSrRO0PY0cYGQ57t4ZLiOfA3MbhUXCm3WooxIin6j15EqM_meVmJyvClbDgxByeoZE6PC2ECyDPh3k9c9y.jpg?r=857",
    "unogsdate": "2020-06-18",
    "imdbid": "tt1024648",
    "download": "0"
  },
  {
    "id": "70269488",
    "title": "300: Rise of an Empire",
    "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWpjskcjAALkWGI68EX1XwQiR6-F2qqnqzLPytq-IvXOr-lthqXiM70S-59XzAQWkzbAjM30F-i6dLRgA3Yrm1mB_g.jpg?r=ba6",
    "synopsis": "Rodrigo Santoro is back leading the Persian forces in their invasion of Greece as mortal-turned-god Xerxes in this prequel to 2007&#39;s 300.<br><b>New on 2020-06-18</b>",
    "rating": "6.2",
    "type": "movie",
    "released": "2014",
    "runtime": "1h42m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfHQJyNNNyVgRu9pdYUtw-PO9OCA1GOMCWGlNKKHmV8j-k-u1C5Q43SdaW5X1SKEFK5F-zWmQti8aIvp-UG8JkAnu9RR.jpg?r=ba6",
    "unogsdate": "2020-06-18",
    "imdbid": "tt1253863",
    "download": "0"
  },
  {
    "id": "70283197",
    "title": "Anchorman 2: The Legend Continues",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUvVj92VUCLxNIWfza6G3vf1NZyK2NQi40dFXqPQSz-bOE0ApPaeRdhbW6Q5_FEi78c3b-4B5eWDKUXuht15YnmnPw.jpg?r=4d4",
    "synopsis": "The &#39;70s are over, and the anachronistic Channel 4 news team tries to stay classy as they reassemble to join New York&#39;s first 24-hour news channel.<br><b>New on 2020-06-18</b>",
    "rating": "6.3",
    "type": "movie",
    "released": "2013",
    "runtime": "1h58m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSsWgWGOPUUSfi7dEMlJ2DteBcku3ehsFrOuQIb7cRi_mkVnV5vPsqYJU9x8hNY10x3J1iMWo_2tIRm34liOUXHOOAEY.jpg?r=4d4",
    "unogsdate": "2020-06-18",
    "imdbid": "tt1229340",
    "download": "0"
  },
  {
    "id": "70293702",
    "title": "The Amazing Spider-Man 2",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaIb_RAswPiq_fepelG7G_E5ETPumm9N67c3Ej2gaFeQRCKvNPY4NOK69u1P0nED7T1QgpZAnFNn_qQkz6buUPVVCA.jpg?r=9dd",
    "synopsis": "Spider-Man squares off against the Rhino and the powerful Electro while struggling to keep his promise to leave Gwen Stacy out of his dangerous life.<br><b>New on 2020-06-18</b>",
    "rating": "6.6",
    "type": "movie",
    "released": "2014",
    "runtime": "2h21m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXUArivve9zWodcakb8jc0DrMdNaI-4budlQNvt2WusT2PhIzkiRA83uyu57WZb3v3UcIlXv07-Pg5hQTcZjhLSHTRBO.jpg?r=9dd",
    "unogsdate": "2020-06-18",
    "imdbid": "tt1872181",
    "download": "1"
  },
  {
    "id": "80013871",
    "title": "American Sniper",
    "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR9gTNmBeuYPTIlDQ7_8w2Rr8Rpyt8OgQbTCOkKgAyQ7j9q_wGxb0v6YYyxy8NOeRsWGwo3yqZcBFSVYKF5uBsDFtQ.jpg?r=f28",
    "synopsis": "U.S. Navy SEAL marksman Chris Kyle racks up an unprecedented number of kills in Iraq, even as his home life starts to slip away from him.<br><b>New on 2020-06-18</b>",
    "rating": "7.3",
    "type": "movie",
    "released": "2014",
    "runtime": "2h12m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXRMHNLCFSFX0vFG4yV8DhS06eQVxxKgxL7t0Ue_6V17WS7T_gFad4MdeRGijSXBPLxPq1aCCgiNHrqVfofr0AB7FPED.jpg?r=f28",
    "unogsdate": "2020-06-18",
    "imdbid": "tt2179136",
    "download": "0"
  },
  {
    "id": "80066500",
    "title": "12 Rounds 3: Lockdown",
    "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfnAbQBkgemXdLEXJAGLHvwW3gl00ldvBd8IS7v7xEqV-PF5XxGUvPiiaraDm-upwYkzYVMAPIQmh9IQOs5hNgWNwQ.jpg?r=59b",
    "synopsis": "Detective John Shaw finds himself hunted by his fellow officers after he uncovers evidence linking his ex-partner to the murder of a drug dealer.<br><b>New on 2020-06-18</b>",
    "rating": "5.2",
    "type": "movie",
    "released": "2015",
    "runtime": "1h30m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABY_weaPZlkXW3udYJCrUAsU9GBs_TyUJeuPjbHdkoMw7s3prMtusP7RZrJMtS8shiPOlrJS-J2JIKxSqpXEhAqLPNg0o.jpg?r=ebd",
    "unogsdate": "2020-06-18",
    "imdbid": "tt3957956",
    "download": "0"
  },
  {
    "id": "80210497",
    "title": "Action Point",
    "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABX_nPIaYZlUMAo6SCVDjfSxpLXD887bWyd0DDu7c9pgtslJpCWD6BGyT6t3OL8vwhyx-UyvQZ5wngDJLOKVjk6UfUA.jpg?r=ea5",
    "synopsis": "A daredevil stuntman builds a second-rate amusement park in New Jersey and fights to keep it open when a greedy developer arrives on the scene.<br><b>New on 2020-06-18</b>",
    "rating": "5.1",
    "type": "movie",
    "released": "2018",
    "runtime": "1h24m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXf7X4WpwePZlBxuBgiQIiUWAXxVyoCBW1rTnp3vMFeOH6L0u_Tt6WI_oAsmq4cY8auqQ5Q_Q2PaFYmg1QmKvrCP-wDA.jpg?r=ea5",
    "unogsdate": "2020-06-18",
    "imdbid": "tt6495770",
    "download": "0"
  },
  {
    "id": "80214451",
    "title": "Along with the Gods: The Two Worlds",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQxaXluhZsAoIdXrJMEep422yrBgpbErjAexiYx8Y13jCF4jVzYFTOHxf8spNDTa64414IEPjL5YX6Iy_QOTU7WSHQ.jpg?r=fb2",
    "synopsis": "A firefighter dies and arrives in the afterlife, where guardians shepherd him through seven trials and a perilous journey through different hells.<br><b>New on 2020-06-18</b>",
    "rating": "7.3",
    "type": "movie",
    "released": "2017",
    "runtime": "2h19m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ6NhrpTOneJT0E9S8OMCgHQ4tQ4BUFN4lWlJY8ZFwmwz7z6vyEQcyqZzwbcTY2nCjc8cD1vC-qwVcSAEmijwru60q6n.jpg?r=fb2",
    "unogsdate": "2020-06-18",
    "imdbid": "tt7160070",
    "download": "0"
  },
  {
    "id": "81001804",
    "title": "100 Days Of Solitude",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTFVoMsPhYZvTNZQX3a6ppzOkDUleV6vufq7ca0jOgK4UzxI0WGwCtNnuZkWTaxVIzqYLcDFAqHRuJepmKN9t9tnaw.jpg?r=036",
    "synopsis": "Spanish photographer Jos&eacute; D&iacute;az spends 100 days living alone on a remote mountain, connecting to nature and documenting the beauty of his surroundings.<br><b>New on 2020-06-18</b>",
    "rating": "",
    "type": "movie",
    "released": "2018",
    "runtime": "1h33m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSrrayVeQjI68icvhRLlP8g6nz9Ig9GM7aEcpRqbVSIIZ-cWKA14PGkspRZQUgQKSEjI6KX4Oc-P2Bzob7cCBhaROtDK.jpg?r=036",
    "unogsdate": "2020-06-18",
    "imdbid": "notfound",
    "download": "0"
  },
  {
    "id": "81017092",
    "title": "Along with the Gods: The Last 49 Days",
    "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQwVB-VUy2s81CdizGxk6-NgGzvh2txeFolpWgrs--n6negHRrAKcX2TWu2Ls_YdqPWJ4BtWEPuY1NPWobX6uXNDmQ.jpg?r=5c1",
    "synopsis": "While defending an unlikely soul, the afterlife Guardians investigate an elderly man who&rsquo;s outstayed his time on Earth, and delve into their own past.<br><b>New on 2020-06-18</b>",
    "rating": "7.1",
    "type": "movie",
    "released": "2018",
    "runtime": "2h21m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSJkr0VqLD4jTYrQn0_-nXFg_CaHDQcn8JAn5g36IwKjjHNXPDjLoo7RKN54CnplKX6bO41EB92TLzUA1K0KpEaVqafa.jpg?r=5c1",
    "unogsdate": "2020-06-18",
    "imdbid": "tt8116428",
    "download": "0"
  },
  {
    "id": "81043532",
    "title": "61 Days",
    "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZI2zPEiEHz_IX7kG-qraqII-hHEARnSlfxF-s4FwQBJhx6w_dNzNQE2bqE02M6NA9WZ1Y5HuLel64nvXXDBx6AlWw.jpg?r=163",
    "synopsis": "In an Aegean town in the 1970s, a young boy shadows a soft-drink peddler during summer break and decides to fast for Ramadan.<br><b>New on 2020-06-18</b>",
    "rating": "7.5",
    "type": "movie",
    "released": "2016",
    "runtime": "1h51m",
    "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbhWUb9LcYeW3MG2ikA29oGoa2QqAn8Jx65uAxkHvc7RGEBDpxgf07tfK2xj7TOMBcQo5tW9QmZJAT9KAKS3qNcl3NgW.jpg?r=163",
    "unogsdate": "2020-06-18",
    "imdbid": "tt5229228",
    "download": "0"
  }]


describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change paginator', () => {
    let paginatedMovieArray = service.paginatroPageChanged(0, MOVIES)
    expect(paginatedMovieArray).toEqual(MOVIES.slice(0,12));
  });
});
