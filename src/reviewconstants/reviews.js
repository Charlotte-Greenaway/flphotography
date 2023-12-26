const reviews = [
    {
        name:"Emma Claire",
        date: "20/12/2023",
        content:"Can’t thank Ash enough for his time and effort at our wedding. He also brought a second photographer which helped with all the different angles. He was professional and friendly and took some beautiful photos to remind us of our beautiful day. They were sent to us electronically the day after which I was not expecting and they were just amazing. We’re grateful for some nigh-time shots too, they’re beautiful. \n Thanks again Ash, you are a star 🌟"
    },
    {
        name:"Sophie Dixon",
        date:"30/11/2023",
        content:"Can’t thank Ash enough for the beautiful photos he captured. Very professional, nothing was too much trouble and got the photos back extremely quick. Will definitely be using again. Highly recommend. Thank you Ash."
    },
    {
        name:"Abbey Banfield",
        date:"27/11/2023",
        content:"Ash was brilliant from the moment he arrived! Very professional, didn’t even know he was there half the time. Took the time to know what we wanted and nothing was too much. Got the photos back the next day and they’re amazing! Highly recommend. Thank you for capturing our day Ash 🩷"
    },
    {
        name:"Danielle Elliott-Hammett",
        date:"29/10/2023",
        content:"Ash is brilliant! Our pictures are absolutely gorgeous. He was so attentive, patient and made us all feel so comfortable. He was happy to listen to my ideas and take the pictures i wanted and happy to look around for perfect opportunities for pictures capturing some really special moments. 10 out of 10 would recommend 100%"
    },
    {
        name:"Jasmine Louise Webb",
        date:"23/10/2023",
        content:`Ash was absolutely amazing! Ash couldn't do enough for us to make sure he captured the most special day of our life, so calm and helpful he made sure everything I wanted was done, nothing was to much trouble.
        from the minute Ash arrived at the venue he was looking to the best spots to captured the most beautiful picture, all requested were met and I cant thank Ash enough for making myself, my husband and all my friends and family feel comfortable in front of the camera, my wedding was on Saturday myself and husband received photos the following morning and then the rest by today( Monday), receiving my photos back so quickly was just a dream and they are BEAUTIFUL.
        Ash you are an amazing photographer and I will be recommending you 100% 
        Thank you for making our day perfect with all thoes beautiful memories.
        Mr&Mrs Webb`
    },
    {
        name:"Helen Elliott",
        date:"20/10/2023",
        content:`Ash, what can I say, not only a fantastic photographer, picking moments throughout the day to capture but an absolute gent too. I cannot recommend you enough. Nothing was too much trouble, for the formal pictures you were there but for moments you’ve captured we didn’t even know you were there. Perfect photographer!!  Thank you so much Ash!!`
    },
    {
        name:"Karen Chant",
        date:"10/10/2023",
        content:`Ash took lots of beautiful photos of my daughter and son in law’s wedding without being intrusive, very friendly chap and it was very reasonably priced.`
    },
    {
        name:"Peter Danko",
        date:"23/10/2023",
        content:`Ash was a brilliant photographer, we absolutely love our photo’s. On the day he blended in nicely so often you didn’t realise your photo was being taken. This makes for lovely natural photo’s! Would highly recommend Ash!`
    },
    {
        name:"Gabriella Blunt",
        date:"14/10/2023",
        content:`We were delighted with the photographs Ash took of our family as wedding guests recently. Ash has a very warm and friendly character, and managed to take so many beautiful photos of every aspect, every detail of the wedding we attended. It was so lovely that he got so involved with the whole of the wedding, not missing anything at all! He was so quick to edit the photos and to get into contact when he had them finished, it just shows how passionate he is about his work! Would highly recommend 😊`
    },
    {
        name:"Shannon Page",
        date:"21/09/2023",
        content:`We highly recommend Ash, absolutely brilliant photos! Very friendly and listened to everything we wanted. Thank you very much 😊`
    },
    {
        name:"Hayley Collis",
        date:"14/10/2023",
        content:`Ash was brilliant, we booked him for a re-shoot as our wedding photos with our orginal photograher didnt come out as we hoped. He helped with poses and was patient with us and the children. The photos we received is everything I hoped they would be and the angles are spot on. if you're looking to book for your wedding or a re-shoot I highly recommend him.`
    },
    {
        name:"Kat Wood",
        date:"02/09/2023",
        content:`Ash was quite simply brilliant.
He knows the best shots and ones you wouldn't have thought of. If you want natural pictures, he captures moments you didn't know happened. Our guest's barely noticed he was there but he missed nothing. Less than 24 hours after our wedding, we had pictures to look at. I'm not sure I can praise him enough, thank-you so very much!`
    },
    {
        name:"Simon Bradfield",
        date:"19/09/2023",
        content:`Ash was our wedding photographer and he was absolutely brilliant- start to finish, his polite and professional style suited our intimate wedding party perfectly and the shots - we could not be happier. If you are looking for natural shots- Ash is the man as the way he mingled around our wedding party to get natural and personal shots was great with guest all commenting how good he was. He also worked brilliantly with our Videographer. We are so pleased and highly recommend him.`
    },
    {
        name:"Emily Cornish",
        date:"24/08/2023",
        content:`Ash was an incredible photographer and we’re so happy we chose him for our big day! He slotted into the family perfectly and the pictures were so natural and beautifully done. He was amazing, his interaction with the whole family and making us as the bride and groom feel really comfortable in front of the camera. Amazingly quick getting the photos back to us too! Could not recommend enough, thank you Ash you have so much talent 👏🏻😍`
    },
    {
        name:"Anneka Lesley",
        date:"08/08/2023",
        content:`Amazing photos!Highly recommend Ash. So friendly and approachable and captured some amazing shots. Thank you so much 😊`
    },
    {
        name:"Joshua Rose",
        date:"07/08/2023",
        content:`Where can I start Ash was amazing he did everything we could ever want and they are some of the best photos I have ever seen. If you are thinking of using First Light don't hesitate and book it. Thanks again you are amazing!!!`
    },
    {
        name:"Helen Mac",
        date:"24/07/2023",
        content:`Ash is fantastic! Despite our rainy wedding day he captured the day perfectly and we are so pleased with all the photos. Ash is patient, calm, professional and punctual. His work is a great mixture of natural and posed group shots (if you wish). Ash sent us all the photos by the following morning which was super quick and so nice to look through together. Thanks again Ash!`
    },
    {
        name:"Vicki Rose",
        date:"30/08/2023",
        content:`We are so glad that we booked Ash to photograph our wedding. He was quick to respond and lovely to deal with leading up to the wedding. 
        On the wedding day everyone commented how friendly he was and he was never pushy or made us feel staged (we wanted it to be natural). He was happy to take any shots we asked and took many we didn’t even realise. 
        He got the photographs back to us at a super quick speed! 
        It was a pleasure to have Ash as part of our special day.
        Thank you Ash!`
    },
    {
        name:"Ashley Harding",
        date:"14/07/2023",
        content:`I couldn’t recommend Ashley enough. He was at the venue early to find the best shots through the day. He was so easy to get on with and fitted in perfectly with our wedding party. 
        Ashley captured the day brilliantly, we couldn’t be more pleased with the pictures and he even managed to get some pictures edited during the wedding breakfast for an early preview of ceremony pictures.
        Would highly recommend to anyone planning their big day!!`
    },
    {
        name:"Sara Louise Richardson",
        date:"19/07/2023",
        content:`I would 100% recommend Ash he's very down to earth a genuinely nice person and professional  there something about him and what he does makes you feel at ease and has real talent and passionate about what he does and shows in every photo definitely makes it hard do pick a favourite photo has great communication and had a load off photo send with in only a few hours`
    }
];

export default reviews;