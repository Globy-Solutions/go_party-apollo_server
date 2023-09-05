\connect go_party;

/*Create some dummy users*/
INSERT INTO public.user (id, name) VALUES
(31, 'Facundo'),
(11, 'Valentino');

INSERT INTO public.events VALUES
(0,'M.A en VIVO','Club Museum',FALSE,'[1,3]',0,'["https://as2.ftcdn.net/v2/jpg/01/99/20/39/1000_F_199203973_8X2E8ryOgs5r2qOerV96fH33Kpxs5SH4.jpg","https://as2.ftcdn.net/v2/jpg/01/20/28/25/1000_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg"]','https://www.youtube.com/watch?v=7sDY4m8KNLc',168,'Perú 535, C1068AAA CABA','Un lugar imponente ubicado en la turística zona de San Telmo, su arquitectura fue diseñada por G. Eiffel conservando el estilo arquitectónico que posee la torre Eiffel. En sus 3 pisos se desarrollan distintos sectores, pistas, livings, 5 barras y un EXCLUSIVO VIP.','2016-07-02T09:16:26 +05:00',-34.6141881,-58.3774831,'["sit","aliqua","proident","adipisicing","mollit","tempor","ipsum"]','[2,3]','[2,3]'),
(1,'voluptate','elit',TRUE,NULL,0,'["https://as2.ftcdn.net/v2/jpg/01/20/28/25/1000_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg"]','https://www.youtube.com/watch?v=7sDY4m8KNLc',592,'199 Riverdale Avenue, Belmont, Alabama, 7129','Occaecat id tempor velit anim eiusmod deserunt consequat nisi. Proident labore nulla laborum officia est. Sit ea anim do Lorem deserunt fugiat ea elit fugiat proident adipisicing reprehenderit. Ea eu magna consectetur anim duis esse deserunt. Excepteur nisi exercitation tempor velit excepteur et dolor mollit nisi ex. Nostrud dolor id Lorem deserunt id culpa dolor adipisicing qui pariatur do magna labore.
','2020-11-21T05:05:45 +06:00',43.045411,153.299657,'["labore","dolor","enim","velit","aliqua","id","nostrud"]','[1,2]','[1,2]'),
(2,'ut','eiusmod',TRUE,NULL,0,'["https://as2.ftcdn.net/v2/jpg/01/99/21/01/1000_F_199210113_PO4I2F3CAfEhCnVnWNveK9mlgWyxY8jn.jpg"]','https://www.youtube.com/watch?v=7sDY4m8KNLc',772,'182 Mill Road, Eureka, Delaware, 7757','Duis sint consequat dolor et ipsum do dolore mollit ex et voluptate est elit. Aliquip in cupidatat cupidatat exercitation ea elit nisi voluptate cupidatat irure nostrud. Ut ex quis officia qui. Excepteur dolor in ad nostrud. Id nisi ea exercitation tempor sunt culpa id.
','2019-10-16T08:51:02 +05:00',22.130659,-106.677368,'["sint","laborum","cillum","duis","deserunt","deserunt","laborum"]','[1,3]','[1,3]');
