# Fiesta.Pics Frontend - Social media platform for parties!

## Backend - https://github.com/alex-305/fiestabackend

## About

The Fiesta.Pics front-end is implemented using Vue.js with Typescript. There are five routes in my frontend application. The first one is the landing view which is what greets you on first arrival. It allows you to either login or create a new account.

![Landing page](https://lh3.googleusercontent.com/pw/AP1GczMuSo2rXjnpuicCUUr2kK4VnFMDh7lGIeML8qelJ6koMhQM5D9cgTiER5q_HacBdEh3Kdh3zjINLNuZTbZAcigktD877vFnOz5KrAvx2JapyJehdoQ=w2400)

Once you have made an account or logged in, there is a navbar with options for Home view, Create view, and Profile view. You are first routed to the home view in which you are shown three different feeds, following, latest, and popular fiestas.

#### Following Feed
![Following feed](https://lh3.googleusercontent.com/pw/AP1GczOI-KfOB3D2j3RKTPUVpRC7g3tdtL5yomEpCVvE3y5Xz_10BLMZilk3W798sFK5ditnsZPpCm-kWrZo2xcaTl5D__raFrTY-3DiqG41y1W9MKH3-rMC9XK29_n3LesShoJ1F77TDBf1C6ML8kb29Qk=w1686-h948-s-no-gm?authuser=0)

#### Latest Feed
![Latest feed](https://lh3.googleusercontent.com/pw/AP1GczNUycHyrhkczGPryQUtKoH62t8BH3cN1YVv6fWvr9uVI8grDlS6JTKuuCqOhtvY_oRMPJI_e4Pd2NnjSfTCjk27rVOAfKrYLat33z5U5yKbjWdDyfZ-IprcPY-U_We40OWlbFXzkN5bo_VINlqPdV8=w1686-h948-s-no-gm?authuser=0)

#### Popular Feed
![Popular feed](https://lh3.googleusercontent.com/pw/AP1GczMy44CpvfnkowRtP3Wj2Xff4dAvLZRA2jvwaOOhUsZLQI-swsWpbaNkmPWLnRpQ1xRN1B5as46jLytZMgdIMs8vLNc030R9nBMQUNerThEyikOmDHfwpQxqfVkQW1yGhmyZMSYJogUYlJgJKQDeHfU=w1686-h948-s-no-gm?authuser=0)

The create view allows you to create a new fiesta by inputting a title and some images. The profile view allows you to view your own profile or another user’s profile.
![Create view](https://lh3.googleusercontent.com/pw/AP1GczMr8ACZWeGkfo4A33J26sQpRBnPVDcNrOfcY36Sdg3Jkba59C5_tMC3P9O_r7xxrXGAFGYZxv-A-r3_Rhshd16lqzUEw96p-WYZgKUU7-7q35PyLSO1CGsWwGSCMaE1nMWb_Ihf26pz8OVvy_xL_2c=w1686-h948-s-no-gm?authuser=0)

The final view on the navbar is the Profile view which displays any given users' profile. 
![Profile View](https://lh3.googleusercontent.com/pw/AP1GczMhcThlmd8cRSiMQNxzoAe7dKgD0i8wvC9K6pbleMLlGED78mYYYACKZFArU2_B1iZI2fzxMRPip5IZFE7mFWsoVzyQF8m3RLGeuHD9NSu_vWtbbA=w2400)

Additionally, there is a fiesta view which allows you to vieiw any given fiesta.
![Fiesta View](https://lh3.googleusercontent.com/pw/AP1GczPQ2LcMBHlL82Ogv8FbIiJ5mI0DrpSM4IRyl7esZElFNdAltJFXi4hWtYTR-9e6Nc_2E4-zGTQeWLR5CtNoNQFRM14-dv9k7HxJ2sPfwmLCpOwr4dA=w2400)

## Features

- **User Registration**: Create your account on Fiesta.Pics or login using your existing credentials.
- **Make Posts**: Post a collection of images collectively known as a "fiesta"
- **Follow Others**: Follow other users and let others follow you.
- **Like Posts**: Like others' posts
- **Responsive Design**: I leveraged Vue.js' ref system to create reactive components that update when you interact with it.