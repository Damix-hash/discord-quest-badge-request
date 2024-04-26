fetch("https://discord.com/api/v9/quests/1227767407154561034/claim-reward", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pl",
    "authorization": your_token,
    "content-type": "application/json",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-captcha-key": captcha_key,
    "x-captcha-rqtoken": captcha_token,
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "pl",
    "x-discord-timezone": "Europe/Warsaw",
    "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDQzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDUiLCJvc19hcmNoIjoieDY0IiwiYXBwX2FyY2giOiJpYTMyIiwic3lzdGVtX2xvY2FsZSI6InBsIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIGRpc2NvcmQvMS4wLjkwNDMgQ2hyb21lLzEyMC4wLjYwOTkuMjkxIEVsZWN0cm9uLzI4LjIuMTAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjI4LjIuMTAiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjoyODgwNjUsIm5hdGl2ZV9idWlsZF9udW1iZXIiOjQ2OTUyLCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsLCJkZXNpZ25faWQiOjB9"
  },
  "referrer": "https://discord.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"platform\":0,\"location\":2}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
