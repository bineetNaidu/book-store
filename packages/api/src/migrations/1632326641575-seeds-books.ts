import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedsBooks1632326641575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Heidi Fleiss: Hollywood Madam', 'now()', 'now()', 'https://robohash.org/impeditinofficia.png?size=50x50&set=set1', 7, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 7, 36.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Nature of Existence, The', 'now()', 'now()', 'https://robohash.org/magniquisconsectetur.png?size=50x50&set=set1', 86, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 8, 62.33);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Macbeth', 'now()', 'now()', 'https://robohash.org/velitsintdolorem.png?size=50x50&set=set1', 73, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 8, 166.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Come and See (Idi i smotri)', 'now()', 'now()', 'https://robohash.org/commodietat.png?size=50x50&set=set1', 85, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 3, 141.93);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Home of the Brave', 'now()', 'now()', 'https://robohash.org/dignissimosassumendarem.png?size=50x50&set=set1', 26, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 7, 108.58);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Trailer Park Boys: Live at the North Pole', 'now()', 'now()', 'https://robohash.org/velitnihilitaque.png?size=50x50&set=set1', 14, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 9, 54.02);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Empire of Passion (a.k.a. In the Realm of Passion) (a.k.a. Phantom Love) (Ai No Borei)', 'now()', 'now()', 'https://robohash.org/consequatursimiliquesed.png?size=50x50&set=set1', 62, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 9, 170.89);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Robot', 'now()', 'now()', 'https://robohash.org/doloresanimiquae.png?size=50x50&set=set1', 50, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 3, 151.25);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fun and Fancy Free', 'now()', 'now()', 'https://robohash.org/ametquideleniti.png?size=50x50&set=set1', 47, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, 54.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Pageant', 'now()', 'now()', 'https://robohash.org/quisquamexpeditaqui.png?size=50x50&set=set1', 98, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 9, 156.82);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Hottest State, The', 'now()', 'now()', 'https://robohash.org/estnonperspiciatis.png?size=50x50&set=set1', 54, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 6, 127.6);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bambi 2', 'now()', 'now()', 'https://robohash.org/avoluptatedolor.png?size=50x50&set=set1', 87, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 6, 99.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fern flowers (Fleur de fougère)', 'now()', 'now()', 'https://robohash.org/exdolornecessitatibus.png?size=50x50&set=set1', 35, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 8, 163.95);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bellboy, The', 'now()', 'now()', 'https://robohash.org/eiusadipisciaccusamus.png?size=50x50&set=set1', 68, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 6, 62.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Seitsemän veljestä', 'now()', 'now()', 'https://robohash.org/dolorprovidentnostrum.png?size=50x50&set=set1', 8, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 8, 108.94);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Saint, The', 'now()', 'now()', 'https://robohash.org/nihilautcupiditate.png?size=50x50&set=set1', 14, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 10, 55.39);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('America 3000', 'now()', 'now()', 'https://robohash.org/etutcumque.png?size=50x50&set=set1', 39, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 7, 44.81);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Reefer Madness (a.k.a. Tell Your Children)', 'now()', 'now()', 'https://robohash.org/auttotamatque.png?size=50x50&set=set1', 57, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 9, 102.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Don''t Think About It (Non Pensarci)', 'now()', 'now()', 'https://robohash.org/modiexlaudantium.png?size=50x50&set=set1', 37, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, 23.37);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Magic Trip', 'now()', 'now()', 'https://robohash.org/autestvero.png?size=50x50&set=set1', 94, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 10, 65.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Giuseppe Makes a Movie', 'now()', 'now()', 'https://robohash.org/accusamusrerumrepellat.png?size=50x50&set=set1', 75, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 10, 153.21);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Double Confession', 'now()', 'now()', 'https://robohash.org/quiquaeratquidem.png?size=50x50&set=set1', 86, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 8, 151.65);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('God''s Comedy (A Comédia de Deus)', 'now()', 'now()', 'https://robohash.org/sedreiciendisperferendis.png?size=50x50&set=set1', 57, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 9, 113.26);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Max Payne', 'now()', 'now()', 'https://robohash.org/sitvoluptatesquia.png?size=50x50&set=set1', 20, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 5, 171.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('BookWars', 'now()', 'now()', 'https://robohash.org/quisaccusamusut.png?size=50x50&set=set1', 58, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 3, 99.04);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Near East, The (El Proximo Oriente)', 'now()', 'now()', 'https://robohash.org/laboriosamautiusto.png?size=50x50&set=set1', 14, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 4, 127.2);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Die Another Day', 'now()', 'now()', 'https://robohash.org/praesentiumrepudiandaevoluptates.png?size=50x50&set=set1', 84, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, 27.2);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('My Life and Times With Antonin Artaud (En compagnie d''Antonin Artaud)', 'now()', 'now()', 'https://robohash.org/exercitationemmaioresut.png?size=50x50&set=set1', 18, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 2, 113.86);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Turtle''s Tale 2: Sammy''s Escape from Paradise, A (Sammy''s avonturen 2) (Sammy''s Adventures 2)', 'now()', 'now()', 'https://robohash.org/laudantiuminventorenesciunt.png?size=50x50&set=set1', 48, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 7, 152.64);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tyler Perry''s Madea''s Witness Protection', 'now()', 'now()', 'https://robohash.org/nihilsuntdoloremque.png?size=50x50&set=set1', 39, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 7, 91.96);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Distant Drums', 'now()', 'now()', 'https://robohash.org/etsitquod.png?size=50x50&set=set1', 64, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, 176.03);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Three Men and a Baby', 'now()', 'now()', 'https://robohash.org/quisquamofficiain.png?size=50x50&set=set1', 33, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2, 82.63);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Mansion of Madness, The', 'now()', 'now()', 'https://robohash.org/automnisquisquam.png?size=50x50&set=set1', 37, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, 72.61);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Outbreak', 'now()', 'now()', 'https://robohash.org/doloresutreprehenderit.png?size=50x50&set=set1', 20, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 4, 64.14);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Half Baked', 'now()', 'now()', 'https://robohash.org/enimminusaccusantium.png?size=50x50&set=set1', 42, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 9, 44.15);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Horror Express', 'now()', 'now()', 'https://robohash.org/asperioresassumendaquas.png?size=50x50&set=set1', 89, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 9, 99.7);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Crush', 'now()', 'now()', 'https://robohash.org/eadignissimosmagnam.png?size=50x50&set=set1', 75, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, 176.12);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Redemption (Hummingbird)', 'now()', 'now()', 'https://robohash.org/eosremofficiis.png?size=50x50&set=set1', 3, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 8, 100.4);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Plan 9 from Outer Space', 'now()', 'now()', 'https://robohash.org/saepeculpamagni.png?size=50x50&set=set1', 78, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 10, 142.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Outbound (Periferic)', 'now()', 'now()', 'https://robohash.org/sintteneturvoluptatum.png?size=50x50&set=set1', 11, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 10, 77.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Cocoon: The Return', 'now()', 'now()', 'https://robohash.org/omnissapientetempore.png?size=50x50&set=set1', 84, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 3, 149.94);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Jungle Creature: Hugo, The (Jungledyret) (Go Hugo Go)', 'now()', 'now()', 'https://robohash.org/quamsuscipitvoluptas.png?size=50x50&set=set1', 27, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, 72.63);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Extreme Justice', 'now()', 'now()', 'https://robohash.org/facilisetvoluptatem.png?size=50x50&set=set1', 69, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 7, 33.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Twelve Angry Men', 'now()', 'now()', 'https://robohash.org/repudiandaenisidolor.png?size=50x50&set=set1', 54, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 3, 65.44);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rent-a-Kid', 'now()', 'now()', 'https://robohash.org/corporisdoloribusodit.png?size=50x50&set=set1', 43, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 9, 122.59);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rude', 'now()', 'now()', 'https://robohash.org/sapientelaborumsunt.png?size=50x50&set=set1', 83, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 7, 24.09);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dog Nail Clipper (Koirankynnenleikkaaja)', 'now()', 'now()', 'https://robohash.org/harumofficiased.png?size=50x50&set=set1', 79, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 3, 90.15);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fracture', 'now()', 'now()', 'https://robohash.org/estliberosit.png?size=50x50&set=set1', 24, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, 129.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Motocrossed', 'now()', 'now()', 'https://robohash.org/sintevenietquia.png?size=50x50&set=set1', 26, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 6, 46.06);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fall, The', 'now()', 'now()', 'https://robohash.org/perferendisipsaeum.png?size=50x50&set=set1', 71, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 9, 93.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Love & Pop', 'now()', 'now()', 'https://robohash.org/isteharumest.png?size=50x50&set=set1', 87, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 2, 164.1);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Charade', 'now()', 'now()', 'https://robohash.org/utfacereet.png?size=50x50&set=set1', 47, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, 29.71);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Billy Elliot', 'now()', 'now()', 'https://robohash.org/quirepellatvelit.png?size=50x50&set=set1', 29, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 6, 162.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Violin, El', 'now()', 'now()', 'https://robohash.org/nihilenimmaiores.png?size=50x50&set=set1', 82, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 9, 38.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Read My Lips (Sur mes lèvres)', 'now()', 'now()', 'https://robohash.org/rationevoluptatemexercitationem.png?size=50x50&set=set1', 41, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 5, 29.9);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bustin'' Loose', 'now()', 'now()', 'https://robohash.org/voluptatematquidem.png?size=50x50&set=set1', 60, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, 36.4);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Seducing Doctor Lewis (Grande séduction, La)', 'now()', 'now()', 'https://robohash.org/perferendisquised.png?size=50x50&set=set1', 19, 'Fusce consequat. Nulla nisl. Nunc nisl.', 6, 169.41);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('I Was Monty''s Double', 'now()', 'now()', 'https://robohash.org/voluptasquodmaiores.png?size=50x50&set=set1', 70, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7, 35.66);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Three Strangers', 'now()', 'now()', 'https://robohash.org/absunttenetur.png?size=50x50&set=set1', 55, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, 66.01);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Women in Love', 'now()', 'now()', 'https://robohash.org/molestiaeautdeserunt.png?size=50x50&set=set1', 54, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 2, 40.74);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Killing of Sister George, The', 'now()', 'now()', 'https://robohash.org/adipisciquisint.png?size=50x50&set=set1', 85, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 10, 95.83);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Levitated Mass', 'now()', 'now()', 'https://robohash.org/earumautemreprehenderit.png?size=50x50&set=set1', 41, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, 104.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Taming the Fire (Ukroshcheniye ognya)', 'now()', 'now()', 'https://robohash.org/maioresquisquamratione.png?size=50x50&set=set1', 48, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 3, 28.93);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Are You Listening?', 'now()', 'now()', 'https://robohash.org/aliquidconsequaturlaudantium.png?size=50x50&set=set1', 58, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 4, 79.96);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('X, Y and Zee (Zee and Co.)', 'now()', 'now()', 'https://robohash.org/autvoluptatempraesentium.png?size=50x50&set=set1', 18, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 7, 40.37);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Used Cars', 'now()', 'now()', 'https://robohash.org/asperioresquampossimus.png?size=50x50&set=set1', 34, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 7, 160.15);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Blackmailed', 'now()', 'now()', 'https://robohash.org/doloribusconsequaturnihil.png?size=50x50&set=set1', 65, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 9, 88.79);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Of Gods and Men (Des hommes et des dieux)', 'now()', 'now()', 'https://robohash.org/voluptatemnisiid.png?size=50x50&set=set1', 6, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 7, 105.29);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Catered Affair, The', 'now()', 'now()', 'https://robohash.org/utadolorum.png?size=50x50&set=set1', 49, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 10, 157.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Cold Comfort Farm', 'now()', 'now()', 'https://robohash.org/nonpossimusa.png?size=50x50&set=set1', 19, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 5, 31.44);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Adult World', 'now()', 'now()', 'https://robohash.org/doloriddelectus.png?size=50x50&set=set1', 53, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 6, 40.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Quo Vadis', 'now()', 'now()', 'https://robohash.org/tenetursaepenumquam.png?size=50x50&set=set1', 54, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 9, 124.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Aladin', 'now()', 'now()', 'https://robohash.org/etdictaquas.png?size=50x50&set=set1', 1, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 9, 135.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 'now()', 'now()', 'https://robohash.org/voluptasetquis.png?size=50x50&set=set1', 1, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, 177.78);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Slipstream', 'now()', 'now()', 'https://robohash.org/etdoloresaspernatur.png?size=50x50&set=set1', 46, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 6, 151.95);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Recruit, The', 'now()', 'now()', 'https://robohash.org/commodiestveritatis.png?size=50x50&set=set1', 14, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 6, 151.49);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dernier Combat, Le (Last Battle, The)', 'now()', 'now()', 'https://robohash.org/utlaboriosamesse.png?size=50x50&set=set1', 5, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 5, 141.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Celebrity', 'now()', 'now()', 'https://robohash.org/remsitut.png?size=50x50&set=set1', 12, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 4, 64.8);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('No Time for Comedy', 'now()', 'now()', 'https://robohash.org/doloresquinumquam.png?size=50x50&set=set1', 31, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 7, 71.42);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Follow Me Quietly', 'now()', 'now()', 'https://robohash.org/voluptatesasperioresveritatis.png?size=50x50&set=set1', 91, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 9, 29.86);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Born to Fight', 'now()', 'now()', 'https://robohash.org/etquismolestiae.png?size=50x50&set=set1', 99, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 7, 164.49);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Shogun''s Ninja (Ninja bugeicho momochi sandayu)', 'now()', 'now()', 'https://robohash.org/minussiteius.png?size=50x50&set=set1', 71, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 4, 154.54);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Spare Bed-Room', 'now()', 'now()', 'https://robohash.org/adsedmolestiae.png?size=50x50&set=set1', 6, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 10, 55.89);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Son of the White Mare', 'now()', 'now()', 'https://robohash.org/etcupiditatenecessitatibus.png?size=50x50&set=set1', 97, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 4, 94.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sharktopus vs. Pteracuda', 'now()', 'now()', 'https://robohash.org/placeatodiosequi.png?size=50x50&set=set1', 30, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 9, 49.15);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Barber, The', 'now()', 'now()', 'https://robohash.org/sedreiciendiseum.png?size=50x50&set=set1', 63, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 4, 22.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('David Cross: Let America Laugh', 'now()', 'now()', 'https://robohash.org/temporanecessitatibuset.png?size=50x50&set=set1', 78, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 9, 144.52);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Stage Beauty', 'now()', 'now()', 'https://robohash.org/voluptatemveniamodio.png?size=50x50&set=set1', 10, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 4, 58.14);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Messenger, The', 'now()', 'now()', 'https://robohash.org/perspiciatisutiure.png?size=50x50&set=set1', 64, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 8, 146.45);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Live Music', 'now()', 'now()', 'https://robohash.org/sintvoluptasdolor.png?size=50x50&set=set1', 61, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 10, 26.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('World, The (Shijie)', 'now()', 'now()', 'https://robohash.org/quiadolorvoluptatem.png?size=50x50&set=set1', 70, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 10, 133.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Man, Woman and the Wall (Kikareta onna no mirareta yoru)', 'now()', 'now()', 'https://robohash.org/adipisciexquae.png?size=50x50&set=set1', 18, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 9, 104.9);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('She''s the One', 'now()', 'now()', 'https://robohash.org/velexpeditaprovident.png?size=50x50&set=set1', 22, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 5, 149.34);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('I, Cesar (Moi César, 10 ans 1/2, 1m39)', 'now()', 'now()', 'https://robohash.org/possimusnonest.png?size=50x50&set=set1', 36, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 9, 121.83);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Memoirs of a Geisha', 'now()', 'now()', 'https://robohash.org/quisquivoluptas.png?size=50x50&set=set1', 59, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 7, 39.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Guys, The', 'now()', 'now()', 'https://robohash.org/inventoresolutaquia.png?size=50x50&set=set1', 28, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 7, 178.31);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('World Traveler', 'now()', 'now()', 'https://robohash.org/oditasperioresrerum.png?size=50x50&set=set1', 30, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 5, 89.79);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Clara and Me (Clara et moi)', 'now()', 'now()', 'https://robohash.org/praesentiumillumdolore.png?size=50x50&set=set1', 24, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 4, 168.7);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Paris, I Love You (Paris, je t''aime)', 'now()', 'now()', 'https://robohash.org/ettemporibussit.png?size=50x50&set=set1', 67, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 2, 93.27);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('LennoNYC', 'now()', 'now()', 'https://robohash.org/ipsasedautem.png?size=50x50&set=set1', 20, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 10, 173.32);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('City of the Living Dead (a.k.a. Gates of Hell, The) (Paura nella città dei morti viventi)', 'now()', 'now()', 'https://robohash.org/velvoluptasest.png?size=50x50&set=set1', 32, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 7, 60.36);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Phantom Lover, The (Ye ban ge sheng)', 'now()', 'now()', 'https://robohash.org/etharumeos.png?size=50x50&set=set1', 27, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 6, 62.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Better Than Sex', 'now()', 'now()', 'https://robohash.org/dolorsimiliqueneque.png?size=50x50&set=set1', 55, 'Fusce consequat. Nulla nisl. Nunc nisl.', 10, 76.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Assassination Tango', 'now()', 'now()', 'https://robohash.org/praesentiumullamut.png?size=50x50&set=set1', 14, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 5, 100.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Goalie''s Anxiety at the Penalty Kick, The (Die Angst des Tormanns beim Elfmeter)', 'now()', 'now()', 'https://robohash.org/quoteneturperspiciatis.png?size=50x50&set=set1', 41, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 4, 147.36);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Color Purple, The', 'now()', 'now()', 'https://robohash.org/autlaborequisquam.png?size=50x50&set=set1', 83, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 3, 46.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Once Bitten', 'now()', 'now()', 'https://robohash.org/omnissedvoluptatem.png?size=50x50&set=set1', 35, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 7, 131.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Big Hangover, The', 'now()', 'now()', 'https://robohash.org/blanditiisaliquamalias.png?size=50x50&set=set1', 49, 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 5, 104.92);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Where''s Marlowe?', 'now()', 'now()', 'https://robohash.org/etporroaliquid.png?size=50x50&set=set1', 18, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 3, 76.11);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Passion', 'now()', 'now()', 'https://robohash.org/accusamusexercitationemrepellendus.png?size=50x50&set=set1', 2, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 5, 169.49);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ex, The', 'now()', 'now()', 'https://robohash.org/quiafugaofficia.png?size=50x50&set=set1', 71, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 4, 128.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Russia''s Toughest Prisons (National Geographic)', 'now()', 'now()', 'https://robohash.org/cumquenisised.png?size=50x50&set=set1', 85, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 7, 168.27);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Jamilya', 'now()', 'now()', 'https://robohash.org/quasiquiaquidem.png?size=50x50&set=set1', 67, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 5, 95.74);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Road Kill (a.k.a. Road Train)', 'now()', 'now()', 'https://robohash.org/doloremqueeligendieaque.png?size=50x50&set=set1', 36, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 9, 159.57);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Shoot to Kill', 'now()', 'now()', 'https://robohash.org/cumsolutaet.png?size=50x50&set=set1', 58, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 4, 103.32);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Last Man, The', 'now()', 'now()', 'https://robohash.org/autquibusdamdolorum.png?size=50x50&set=set1', 19, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 5, 80.42);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Shrek the Third', 'now()', 'now()', 'https://robohash.org/namdelectusculpa.png?size=50x50&set=set1', 70, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 5, 162.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Love (Szerelem)', 'now()', 'now()', 'https://robohash.org/doloraspernaturtempora.png?size=50x50&set=set1', 56, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 6, 169.3);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Heima', 'now()', 'now()', 'https://robohash.org/accusantiumenimfugit.png?size=50x50&set=set1', 6, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 8, 38.8);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Cold Fish (Tsumetai nettaigyo)', 'now()', 'now()', 'https://robohash.org/atdistinctionostrum.png?size=50x50&set=set1', 58, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 5, 25.07);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Topper', 'now()', 'now()', 'https://robohash.org/officiasuntmollitia.png?size=50x50&set=set1', 61, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 9, 78.79);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('God''s Gun', 'now()', 'now()', 'https://robohash.org/voluptatibusquamquos.png?size=50x50&set=set1', 70, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 8, 170.32);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rite, The', 'now()', 'now()', 'https://robohash.org/sintremrepudiandae.png?size=50x50&set=set1', 59, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, 114.8);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Perfume: The Story of a Murderer', 'now()', 'now()', 'https://robohash.org/culpasuntsit.png?size=50x50&set=set1', 53, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 3, 22.2);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fiston', 'now()', 'now()', 'https://robohash.org/doloremquonisi.png?size=50x50&set=set1', 71, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 5, 34.54);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('9 Songs', 'now()', 'now()', 'https://robohash.org/quosillumatque.png?size=50x50&set=set1', 15, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 9, 179.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Siberia', 'now()', 'now()', 'https://robohash.org/modivoluptasadipisci.png?size=50x50&set=set1', 70, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, 43.05);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Corn Island (Simindis kundzuli)', 'now()', 'now()', 'https://robohash.org/cupiditateeosveritatis.png?size=50x50&set=set1', 22, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 10, 107.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Escaflowne: The Movie (Escaflowne)', 'now()', 'now()', 'https://robohash.org/accusamusconsequunturcupiditate.png?size=50x50&set=set1', 12, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 6, 167.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Santa Clause, The', 'now()', 'now()', 'https://robohash.org/autquisvoluptas.png?size=50x50&set=set1', 39, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 4, 147.71);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Summer Wishes, Winter Dreams', 'now()', 'now()', 'https://robohash.org/eumconsecteturnecessitatibus.png?size=50x50&set=set1', 58, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 6, 97.66);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fate of a Man (Sudba cheloveka)', 'now()', 'now()', 'https://robohash.org/voluptasabincidunt.png?size=50x50&set=set1', 84, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 9, 153.53);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Chambre en ville, Une (Room in Town, A)', 'now()', 'now()', 'https://robohash.org/sequifugaenim.png?size=50x50&set=set1', 54, 'Fusce consequat. Nulla nisl. Nunc nisl.', 7, 88.37);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Manito', 'now()', 'now()', 'https://robohash.org/estdoloremquenam.png?size=50x50&set=set1', 19, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 7, 169.73);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Babar The Movie', 'now()', 'now()', 'https://robohash.org/illonemoaccusamus.png?size=50x50&set=set1', 60, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 8, 165.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Majesteit', 'now()', 'now()', 'https://robohash.org/saepequidemut.png?size=50x50&set=set1', 99, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 2, 142.61);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Girl in the Café, The', 'now()', 'now()', 'https://robohash.org/quisquamharumautem.png?size=50x50&set=set1', 96, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, 165.43);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Letter Never Sent (Neotpravlennoye pismo)', 'now()', 'now()', 'https://robohash.org/quidemetlabore.png?size=50x50&set=set1', 23, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 9, 173.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Gurren Lagann: Childhood''s End (Gekijô ban Tengen toppa guren ragan: Guren hen)', 'now()', 'now()', 'https://robohash.org/laborumquieligendi.png?size=50x50&set=set1', 91, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, 35.52);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('The Gunman', 'now()', 'now()', 'https://robohash.org/rationequasirecusandae.png?size=50x50&set=set1', 60, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 10, 126.96);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('L''Italien', 'now()', 'now()', 'https://robohash.org/quibusdamveritatisneque.png?size=50x50&set=set1', 62, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, 134.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Leo the Last', 'now()', 'now()', 'https://robohash.org/excepturieligendivel.png?size=50x50&set=set1', 90, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 2, 49.87);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Addams Family Values', 'now()', 'now()', 'https://robohash.org/voluptassitsapiente.png?size=50x50&set=set1', 89, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 5, 90.91);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Still of the Night', 'now()', 'now()', 'https://robohash.org/quiablanditiisdeserunt.png?size=50x50&set=set1', 9, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, 121.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Woman on the Beach, The', 'now()', 'now()', 'https://robohash.org/illumlaboriosamfacilis.png?size=50x50&set=set1', 74, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 5, 50.43);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Love Punch, The', 'now()', 'now()', 'https://robohash.org/asperioressedex.png?size=50x50&set=set1', 93, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 4, 122.53);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sofia''s Last Ambulance (Poslednaka lineika na Sofia)', 'now()', 'now()', 'https://robohash.org/nullavitaeillo.png?size=50x50&set=set1', 66, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 10, 155.15);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Faces of Death 3', 'now()', 'now()', 'https://robohash.org/providentvoluptatesvoluptatem.png?size=50x50&set=set1', 79, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 6, 22.01);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Highlander: The Source', 'now()', 'now()', 'https://robohash.org/evenietducimusullam.png?size=50x50&set=set1', 19, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 3, 117.12);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Back to the Garden, Flower Power Comes Full Circle', 'now()', 'now()', 'https://robohash.org/delectusconsecteturnon.png?size=50x50&set=set1', 32, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 3, 88.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bleak Night', 'now()', 'now()', 'https://robohash.org/inventoredeseruntvoluptatibus.png?size=50x50&set=set1', 12, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 9, 178.35);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fragile', 'now()', 'now()', 'https://robohash.org/etquasiqui.png?size=50x50&set=set1', 12, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 4, 28.54);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Julius Caesar', 'now()', 'now()', 'https://robohash.org/atquequamquis.png?size=50x50&set=set1', 15, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 10, 21.69);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Welcome Home, Roscoe Jenkins', 'now()', 'now()', 'https://robohash.org/namaliasesse.png?size=50x50&set=set1', 12, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 10, 160.99);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('King David', 'now()', 'now()', 'https://robohash.org/essequodrepudiandae.png?size=50x50&set=set1', 58, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 2, 104.45);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('American Boy: A Profile of: Steven Prince', 'now()', 'now()', 'https://robohash.org/sedaccusantiumsit.png?size=50x50&set=set1', 86, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 7, 86.31);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Leviathan', 'now()', 'now()', 'https://robohash.org/quiatquecorporis.png?size=50x50&set=set1', 18, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 6, 75.41);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Life is a Bed of Roses (Vie est un roman, La)', 'now()', 'now()', 'https://robohash.org/possimusveritatisaut.png?size=50x50&set=set1', 20, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 7, 178.53);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dealing: Or the Berkeley-to-Boston Forty-Brick Lost-Bag Blues', 'now()', 'now()', 'https://robohash.org/exdeseruntneque.png?size=50x50&set=set1', 13, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 3, 48.87);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Guy and Madeline on a Park Bench', 'now()', 'now()', 'https://robohash.org/remdoloremadipisci.png?size=50x50&set=set1', 25, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 5, 48.04);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fistful of Dollars, A (Per un pugno di dollari)', 'now()', 'now()', 'https://robohash.org/sitvelperferendis.png?size=50x50&set=set1', 47, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 7, 177.35);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Go Figure (Va savoir)', 'now()', 'now()', 'https://robohash.org/rationeassumendaut.png?size=50x50&set=set1', 98, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, 37.37);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Love the Beast', 'now()', 'now()', 'https://robohash.org/delectusetiusto.png?size=50x50&set=set1', 11, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 5, 77.35);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Forgive Me', 'now()', 'now()', 'https://robohash.org/nonasperioressunt.png?size=50x50&set=set1', 52, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 7, 119.87);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Viva Villa!', 'now()', 'now()', 'https://robohash.org/veritatisestdolor.png?size=50x50&set=set1', 74, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 8, 74.79);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('FLCL', 'now()', 'now()', 'https://robohash.org/nequeplaceatsuscipit.png?size=50x50&set=set1', 70, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 9, 143.54);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('We Won''t Grow Old Together (Nous ne vieillirons pas ensemble)', 'now()', 'now()', 'https://robohash.org/addictaqui.png?size=50x50&set=set1', 68, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 9, 106.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Enchanted', 'now()', 'now()', 'https://robohash.org/autvoluptasodio.png?size=50x50&set=set1', 16, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 3, 30.13);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Three Wise Fools', 'now()', 'now()', 'https://robohash.org/magnamautqui.png?size=50x50&set=set1', 100, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 8, 96.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Scarlet Letter, The', 'now()', 'now()', 'https://robohash.org/eumipsamodit.png?size=50x50&set=set1', 99, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 8, 69.82);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('You''re a Good Man, Charlie Brown', 'now()', 'now()', 'https://robohash.org/velitiustosunt.png?size=50x50&set=set1', 60, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 6, 115.01);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Stolen Life, A', 'now()', 'now()', 'https://robohash.org/sequiofficiisquas.png?size=50x50&set=set1', 82, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 8, 151.39);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Superman and the Mole-Men', 'now()', 'now()', 'https://robohash.org/etetcupiditate.png?size=50x50&set=set1', 22, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 8, 124.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Piripäiväkirja', 'now()', 'now()', 'https://robohash.org/voluptasipsammagnam.png?size=50x50&set=set1', 53, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 7, 73.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Eden', 'now()', 'now()', 'https://robohash.org/quipariaturest.png?size=50x50&set=set1', 54, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 7, 123.14);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tupac: Resurrection', 'now()', 'now()', 'https://robohash.org/illumsedexercitationem.png?size=50x50&set=set1', 61, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 3, 93.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Coal Miner''s Daughter', 'now()', 'now()', 'https://robohash.org/molestiaerecusandaeenim.png?size=50x50&set=set1', 99, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 10, 74.0);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Water Horse: Legend of the Deep, The', 'now()', 'now()', 'https://robohash.org/omnisquiafacere.png?size=50x50&set=set1', 10, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 5, 166.33);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tales from the Crypt Presents: Bordello of Blood', 'now()', 'now()', 'https://robohash.org/atquequasiipsum.png?size=50x50&set=set1', 36, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 6, 93.87);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Thief of Hearts', 'now()', 'now()', 'https://robohash.org/utnonnihil.png?size=50x50&set=set1', 40, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 9, 158.64);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Star Trek II: The Wrath of Khan', 'now()', 'now()', 'https://robohash.org/rerumetlaborum.png?size=50x50&set=set1', 97, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 2, 109.04);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Paperhouse', 'now()', 'now()', 'https://robohash.org/porroetquis.png?size=50x50&set=set1', 12, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, 113.98);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Heart Condition', 'now()', 'now()', 'https://robohash.org/facilisperferendisconsequatur.png?size=50x50&set=set1', 64, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 10, 123.07);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Before I Self Destruct', 'now()', 'now()', 'https://robohash.org/velitetvoluptas.png?size=50x50&set=set1', 23, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, 20.04);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Goodbye to All That', 'now()', 'now()', 'https://robohash.org/errornumquamquos.png?size=50x50&set=set1', 11, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, 136.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Monkey Business', 'now()', 'now()', 'https://robohash.org/autemdignissimosconsectetur.png?size=50x50&set=set1', 78, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 7, 116.0);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Adventurer: The Curse of the Midas Box, The', 'now()', 'now()', 'https://robohash.org/evenietremminus.png?size=50x50&set=set1', 50, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 5, 22.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Breaking and Entering', 'now()', 'now()', 'https://robohash.org/quamsuntnemo.png?size=50x50&set=set1', 49, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 9, 174.86);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Friday the 13th Part VII: The New Blood', 'now()', 'now()', 'https://robohash.org/suntrerumeaque.png?size=50x50&set=set1', 22, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 2, 42.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Coming Apart', 'now()', 'now()', 'https://robohash.org/suscipitsedrepellendus.png?size=50x50&set=set1', 9, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 4, 61.83);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('LennoNYC', 'now()', 'now()', 'https://robohash.org/cumqueconsecteturtotam.png?size=50x50&set=set1', 42, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 4, 152.08);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ultraviolet', 'now()', 'now()', 'https://robohash.org/etvoluptatequia.png?size=50x50&set=set1', 28, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 9, 175.82);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('United 93', 'now()', 'now()', 'https://robohash.org/molestiaeipsamexplicabo.png?size=50x50&set=set1', 49, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 2, 84.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bag It', 'now()', 'now()', 'https://robohash.org/suntsedet.png?size=50x50&set=set1', 88, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 2, 52.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Zero de conduite (Zero for Conduct) (Zéro de conduite: Jeunes diables au collège)', 'now()', 'now()', 'https://robohash.org/exercitationemindolore.png?size=50x50&set=set1', 16, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 7, 37.93);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Show Me Love (Fucking Åmål)', 'now()', 'now()', 'https://robohash.org/sequiexcepturiquidem.png?size=50x50&set=set1', 25, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 5, 109.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Crude Oasis, The', 'now()', 'now()', 'https://robohash.org/autquonumquam.png?size=50x50&set=set1', 13, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 7, 148.66);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Mistress America', 'now()', 'now()', 'https://robohash.org/laboreveniamab.png?size=50x50&set=set1', 85, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 7, 81.46);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Maze', 'now()', 'now()', 'https://robohash.org/doloreumnihil.png?size=50x50&set=set1', 83, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 5, 80.91);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Modigliani', 'now()', 'now()', 'https://robohash.org/rerumdoloremet.png?size=50x50&set=set1', 68, 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 8, 152.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('So Long Letty', 'now()', 'now()', 'https://robohash.org/corruptimagnia.png?size=50x50&set=set1', 82, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 2, 113.5);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Monsieur Lazhar', 'now()', 'now()', 'https://robohash.org/quitemporibusquia.png?size=50x50&set=set1', 92, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 2, 28.6);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Beautiful Kate', 'now()', 'now()', 'https://robohash.org/essevelitsapiente.png?size=50x50&set=set1', 39, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 5, 138.15);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dollman', 'now()', 'now()', 'https://robohash.org/nonquimaiores.png?size=50x50&set=set1', 95, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 10, 117.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Analyze That', 'now()', 'now()', 'https://robohash.org/repellatetperspiciatis.png?size=50x50&set=set1', 52, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 5, 110.26);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('23 Paces to Baker Street', 'now()', 'now()', 'https://robohash.org/ipsamasperioresut.png?size=50x50&set=set1', 57, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 10, 141.2);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('42nd Street', 'now()', 'now()', 'https://robohash.org/accusamusrationevoluptatum.png?size=50x50&set=set1', 89, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 10, 30.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rock Star', 'now()', 'now()', 'https://robohash.org/rerumetamet.png?size=50x50&set=set1', 17, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 3, 123.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Raging Bull', 'now()', 'now()', 'https://robohash.org/doloremqueremveniam.png?size=50x50&set=set1', 18, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 9, 172.81);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Nothing Personal', 'now()', 'now()', 'https://robohash.org/sintaccusamusillo.png?size=50x50&set=set1', 13, 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 10, 140.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Guess Who''s Coming to Dinner', 'now()', 'now()', 'https://robohash.org/suntfugitquis.png?size=50x50&set=set1', 97, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, 149.98);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Petrified Forest, The', 'now()', 'now()', 'https://robohash.org/accusantiumundeearum.png?size=50x50&set=set1', 43, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, 71.78);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Just Friends', 'now()', 'now()', 'https://robohash.org/sedducimusin.png?size=50x50&set=set1', 35, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 23.06);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tar', 'now()', 'now()', 'https://robohash.org/voluptasharumhic.png?size=50x50&set=set1', 67, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 10, 122.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Close', 'now()', 'now()', 'https://robohash.org/namconsequunturquia.png?size=50x50&set=set1', 66, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, 26.65);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Killing Zoe', 'now()', 'now()', 'https://robohash.org/culpaquibusdamiusto.png?size=50x50&set=set1', 17, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 8, 22.94);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Roman Spring of Mrs. Stone, The', 'now()', 'now()', 'https://robohash.org/etillumoccaecati.png?size=50x50&set=set1', 12, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 4, 120.84);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Delicacy (La délicatesse)', 'now()', 'now()', 'https://robohash.org/delenitivoluptasdistinctio.png?size=50x50&set=set1', 54, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 7, 143.61);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Letter to Elia, A', 'now()', 'now()', 'https://robohash.org/illumatquos.png?size=50x50&set=set1', 30, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 2, 147.33);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Pawnbroker, The', 'now()', 'now()', 'https://robohash.org/rerumquiest.png?size=50x50&set=set1', 1, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 9, 102.29);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Fred: The Movie', 'now()', 'now()', 'https://robohash.org/nesciuntsintcum.png?size=50x50&set=set1', 78, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 2, 160.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Octane', 'now()', 'now()', 'https://robohash.org/expeditasimiliquesequi.png?size=50x50&set=set1', 51, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 4, 99.42);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ascent, The (Voskhozhdeniye)', 'now()', 'now()', 'https://robohash.org/amettemporeesse.png?size=50x50&set=set1', 83, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 6, 44.57);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('In Their Skin', 'now()', 'now()', 'https://robohash.org/explicaboeumminus.png?size=50x50&set=set1', 52, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 5, 82.04);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('We Are Marshall', 'now()', 'now()', 'https://robohash.org/aperiameosipsum.png?size=50x50&set=set1', 96, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 4, 152.64);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tomorrow, the World!', 'now()', 'now()', 'https://robohash.org/dolorcommodiexpedita.png?size=50x50&set=set1', 9, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, 175.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('E Aí... Comeu?', 'now()', 'now()', 'https://robohash.org/quamrepudiandaeet.png?size=50x50&set=set1', 47, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, 117.5);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('I''m No Angel', 'now()', 'now()', 'https://robohash.org/autdignissimosvoluptates.png?size=50x50&set=set1', 78, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 5, 168.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Last Chance', 'now()', 'now()', 'https://robohash.org/excepturiquiipsam.png?size=50x50&set=set1', 78, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 2, 65.07);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Speedy', 'now()', 'now()', 'https://robohash.org/quiodiosit.png?size=50x50&set=set1', 21, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 8, 158.25);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Keeper of the Flame', 'now()', 'now()', 'https://robohash.org/doloresminusqui.png?size=50x50&set=set1', 33, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 3, 24.98);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Trial by Jury', 'now()', 'now()', 'https://robohash.org/voluptatemutquia.png?size=50x50&set=set1', 79, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, 71.55);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Absence of Malice', 'now()', 'now()', 'https://robohash.org/earumveritatisqui.png?size=50x50&set=set1', 59, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 10, 24.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Gleason', 'now()', 'now()', 'https://robohash.org/temporeveniamerror.png?size=50x50&set=set1', 55, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 8, 169.44);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Secret Admirer', 'now()', 'now()', 'https://robohash.org/autsintsoluta.png?size=50x50&set=set1', 7, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 9, 174.12);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Nothing in Common', 'now()', 'now()', 'https://robohash.org/corporisnonaut.png?size=50x50&set=set1', 99, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 10, 159.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Salomè', 'now()', 'now()', 'https://robohash.org/culpaidsit.png?size=50x50&set=set1', 37, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 10, 153.29);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Good Guys Wear Black', 'now()', 'now()', 'https://robohash.org/utliberomaiores.png?size=50x50&set=set1', 51, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, 38.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Circles (Krugovi)', 'now()', 'now()', 'https://robohash.org/impeditexcepturiet.png?size=50x50&set=set1', 84, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 3, 62.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('My Giant', 'now()', 'now()', 'https://robohash.org/sapientequilabore.png?size=50x50&set=set1', 59, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 8, 65.11);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Contagion', 'now()', 'now()', 'https://robohash.org/suntsedconsequatur.png?size=50x50&set=set1', 61, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 9, 31.77);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Shopworn Angel, The', 'now()', 'now()', 'https://robohash.org/rerumdoloremnecessitatibus.png?size=50x50&set=set1', 96, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 7, 138.18);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Passion Play', 'now()', 'now()', 'https://robohash.org/eumeaquevoluptatem.png?size=50x50&set=set1', 34, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 7, 132.27);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ordeal, The (Calvaire)', 'now()', 'now()', 'https://robohash.org/accusamusdolorumvoluptatum.png?size=50x50&set=set1', 99, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 9, 150.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Star Wars: Episode VI - Return of the Jedi', 'now()', 'now()', 'https://robohash.org/ametestaut.png?size=50x50&set=set1', 62, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, 30.41);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Missing William', 'now()', 'now()', 'https://robohash.org/autemperspiciatispossimus.png?size=50x50&set=set1', 47, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 10, 124.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Hardboiled Egg (Ovosodo)', 'now()', 'now()', 'https://robohash.org/nonrerummolestiae.png?size=50x50&set=set1', 40, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 3, 36.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Brute, The (Bruto, El)', 'now()', 'now()', 'https://robohash.org/quiametincidunt.png?size=50x50&set=set1', 36, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 8, 142.46);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('I Don''t Want to Sleep Alone (Hei yan quan)', 'now()', 'now()', 'https://robohash.org/etveritatisquibusdam.png?size=50x50&set=set1', 77, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 5, 109.01);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Angels Crest', 'now()', 'now()', 'https://robohash.org/utestaut.png?size=50x50&set=set1', 53, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, 139.02);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dying Breed', 'now()', 'now()', 'https://robohash.org/voluptaseaat.png?size=50x50&set=set1', 54, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 10, 114.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Wild Zero', 'now()', 'now()', 'https://robohash.org/quodolorenecessitatibus.png?size=50x50&set=set1', 15, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 10, 32.54);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Babe Ruth Story, The ', 'now()', 'now()', 'https://robohash.org/deseruntquasiquam.png?size=50x50&set=set1', 64, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 4, 61.73);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Secret of NIMH 2: Timmy to the Rescue, The', 'now()', 'now()', 'https://robohash.org/quiullameos.png?size=50x50&set=set1', 18, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 2, 110.87);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Prince of Central Park, The', 'now()', 'now()', 'https://robohash.org/ullammagnamvoluptates.png?size=50x50&set=set1', 54, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, 47.7);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Singer, The (Quand j''étais chanteur)', 'now()', 'now()', 'https://robohash.org/utremsed.png?size=50x50&set=set1', 10, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3, 142.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Desert Hearts', 'now()', 'now()', 'https://robohash.org/nequeutquia.png?size=50x50&set=set1', 97, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 3, 178.69);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('House of the Rising Sun', 'now()', 'now()', 'https://robohash.org/nisitemporaquo.png?size=50x50&set=set1', 42, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 6, 169.08);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('American Ninja 5', 'now()', 'now()', 'https://robohash.org/ipsavelsed.png?size=50x50&set=set1', 46, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 6, 117.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('First Knight', 'now()', 'now()', 'https://robohash.org/quiaducimusnon.png?size=50x50&set=set1', 10, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 3, 108.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('War Stories', 'now()', 'now()', 'https://robohash.org/occaecatidistinctioeum.png?size=50x50&set=set1', 4, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 3, 154.65);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Beerfest', 'now()', 'now()', 'https://robohash.org/autemquidolor.png?size=50x50&set=set1', 69, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, 90.34);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Runaway Jury', 'now()', 'now()', 'https://robohash.org/praesentiumetmaxime.png?size=50x50&set=set1', 45, 'Fusce consequat. Nulla nisl. Nunc nisl.', 7, 179.29);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Pieces (Mil gritos tiene la noche) (One Thousand Cries Has the Night)', 'now()', 'now()', 'https://robohash.org/etminusconsequatur.png?size=50x50&set=set1', 40, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 4, 133.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Goodbye Bafana (Color of Freedom, The)', 'now()', 'now()', 'https://robohash.org/voluptatemmaioressunt.png?size=50x50&set=set1', 67, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 4, 39.66);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Caltiki the Undying Monster', 'now()', 'now()', 'https://robohash.org/quiadelenitivero.png?size=50x50&set=set1', 27, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, 64.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Long John Silver', 'now()', 'now()', 'https://robohash.org/namrerumodio.png?size=50x50&set=set1', 61, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 7, 47.6);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Love Letter ', 'now()', 'now()', 'https://robohash.org/errorconsequunturenim.png?size=50x50&set=set1', 63, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 10, 178.79);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Maria Full of Grace (Maria, Llena eres de gracia)', 'now()', 'now()', 'https://robohash.org/eumveldolores.png?size=50x50&set=set1', 77, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 7, 130.17);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Jolly Boys'' Last Stand, The', 'now()', 'now()', 'https://robohash.org/adipiscieaearum.png?size=50x50&set=set1', 91, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, 167.32);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Serpent and the Rainbow, The', 'now()', 'now()', 'https://robohash.org/perspiciatisvoluptatesea.png?size=50x50&set=set1', 18, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 4, 163.61);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Brother Bear 2', 'now()', 'now()', 'https://robohash.org/mollitiaprovidentet.png?size=50x50&set=set1', 97, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 9, 50.62);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Road North (Tie pohjoiseen)', 'now()', 'now()', 'https://robohash.org/quiadoloremquesint.png?size=50x50&set=set1', 50, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 10, 174.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Good, the Bad, the Weird, The (Joheunnom nabbeunnom isanghannom)', 'now()', 'now()', 'https://robohash.org/autemquidemet.png?size=50x50&set=set1', 13, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 9, 149.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Twice-Told Tales', 'now()', 'now()', 'https://robohash.org/faceretemporibusvoluptas.png?size=50x50&set=set1', 94, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 9, 168.08);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sister Helen ', 'now()', 'now()', 'https://robohash.org/isteeanumquam.png?size=50x50&set=set1', 52, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 8, 142.59);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('College', 'now()', 'now()', 'https://robohash.org/temporibuscupiditatedolor.png?size=50x50&set=set1', 25, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 3, 50.58);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('The Fourth War', 'now()', 'now()', 'https://robohash.org/quisintlibero.png?size=50x50&set=set1', 96, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 9, 153.9);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('9 Songs', 'now()', 'now()', 'https://robohash.org/autemautaliquam.png?size=50x50&set=set1', 95, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 5, 37.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('The Wonders', 'now()', 'now()', 'https://robohash.org/nequefugiatest.png?size=50x50&set=set1', 48, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, 126.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Kids in America', 'now()', 'now()', 'https://robohash.org/fugitidsit.png?size=50x50&set=set1', 90, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 8, 44.25);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tremors 4: The Legend Begins', 'now()', 'now()', 'https://robohash.org/mollitiaexporro.png?size=50x50&set=set1', 66, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 9, 29.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Too Tough to Die: A Tribute to Johnny Ramone', 'now()', 'now()', 'https://robohash.org/abeaet.png?size=50x50&set=set1', 78, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 10, 149.14);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Katatsumori', 'now()', 'now()', 'https://robohash.org/iustoprovidentvoluptate.png?size=50x50&set=set1', 70, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 7, 143.79);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rabid Dogs (Kidnapped) (Cani arrabbiati)', 'now()', 'now()', 'https://robohash.org/beataequilabore.png?size=50x50&set=set1', 81, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 8, 109.84);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Smokers Only (Vagón Fumador)', 'now()', 'now()', 'https://robohash.org/impeditdoloremlabore.png?size=50x50&set=set1', 82, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, 145.73);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('My Life So Far', 'now()', 'now()', 'https://robohash.org/dignissimosnullaipsum.png?size=50x50&set=set1', 83, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 4, 138.57);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Toughguy', 'now()', 'now()', 'https://robohash.org/sedpariatureum.png?size=50x50&set=set1', 7, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 5, 124.02);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Wild', 'now()', 'now()', 'https://robohash.org/omnisinciduntdolores.png?size=50x50&set=set1', 69, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 7, 119.08);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Gabriel Over the White House', 'now()', 'now()', 'https://robohash.org/voluptatemremnatus.png?size=50x50&set=set1', 60, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, 101.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Return of the Killer Tomatoes!', 'now()', 'now()', 'https://robohash.org/blanditiisquaeratquam.png?size=50x50&set=set1', 30, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 4, 111.62);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Penitentiary', 'now()', 'now()', 'https://robohash.org/etaliasmagni.png?size=50x50&set=set1', 98, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 7, 135.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('By the Light of the Silvery Moon', 'now()', 'now()', 'https://robohash.org/quiimpeditneque.png?size=50x50&set=set1', 82, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 6, 113.74);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Girl, The (Flickan)', 'now()', 'now()', 'https://robohash.org/eosautcommodi.png?size=50x50&set=set1', 32, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2, 95.38);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tyler Perry''s For Colored Girls', 'now()', 'now()', 'https://robohash.org/aatea.png?size=50x50&set=set1', 36, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, 66.1);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tables Turned on the Gardener', 'now()', 'now()', 'https://robohash.org/necessitatibusameteligendi.png?size=50x50&set=set1', 7, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 7, 165.63);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('One on One', 'now()', 'now()', 'https://robohash.org/illumetducimus.png?size=50x50&set=set1', 16, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 6, 178.78);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Grave, The', 'now()', 'now()', 'https://robohash.org/quiaquihic.png?size=50x50&set=set1', 78, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, 144.53);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Phantom Tollbooth, The', 'now()', 'now()', 'https://robohash.org/estprovidentfuga.png?size=50x50&set=set1', 82, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 6, 85.01);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Liebelei', 'now()', 'now()', 'https://robohash.org/aliquamdelenitiodit.png?size=50x50&set=set1', 40, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 5, 142.1);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Runaway', 'now()', 'now()', 'https://robohash.org/accusamusrerumcum.png?size=50x50&set=set1', 61, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 2, 63.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Foodfight!', 'now()', 'now()', 'https://robohash.org/utidet.png?size=50x50&set=set1', 3, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 5, 69.41);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Lives of Others, The (Das leben der Anderen)', 'now()', 'now()', 'https://robohash.org/quitemporequisquam.png?size=50x50&set=set1', 98, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 9, 130.9);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Mean Guns', 'now()', 'now()', 'https://robohash.org/assumendaquiaillo.png?size=50x50&set=set1', 84, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 9, 60.98);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Welcome to L.A.', 'now()', 'now()', 'https://robohash.org/uteligendidolorem.png?size=50x50&set=set1', 25, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 2, 89.84);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Born to Race', 'now()', 'now()', 'https://robohash.org/aperiamquisint.png?size=50x50&set=set1', 72, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 2, 38.73);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('City Heat', 'now()', 'now()', 'https://robohash.org/seddelenitiquasi.png?size=50x50&set=set1', 58, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 7, 131.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Puzzlehead', 'now()', 'now()', 'https://robohash.org/quodadipiscidoloribus.png?size=50x50&set=set1', 65, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 9, 45.39);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Last Seduction II, The', 'now()', 'now()', 'https://robohash.org/voluptasipsatempore.png?size=50x50&set=set1', 26, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, 34.62);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('My Childhood', 'now()', 'now()', 'https://robohash.org/sapienteanimiaccusamus.png?size=50x50&set=set1', 89, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 10, 107.93);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Picture This', 'now()', 'now()', 'https://robohash.org/explicabodelectusat.png?size=50x50&set=set1', 14, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 2, 99.46);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('First Grader, The', 'now()', 'now()', 'https://robohash.org/consecteturminimaiste.png?size=50x50&set=set1', 77, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 9, 64.25);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('The Last Round', 'now()', 'now()', 'https://robohash.org/cupiditatemolestiasrem.png?size=50x50&set=set1', 64, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 8, 40.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('The Day I Saw Your Heart', 'now()', 'now()', 'https://robohash.org/nihiloditdeserunt.png?size=50x50&set=set1', 33, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 2, 146.02);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Touch of Class, A', 'now()', 'now()', 'https://robohash.org/suscipitvelitin.png?size=50x50&set=set1', 81, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 2, 25.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Naked Prey, The', 'now()', 'now()', 'https://robohash.org/quidemearumeveniet.png?size=50x50&set=set1', 67, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 9, 33.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Escaflowne: The Movie (Escaflowne)', 'now()', 'now()', 'https://robohash.org/expeditanobiseius.png?size=50x50&set=set1', 71, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 3, 142.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Desperation', 'now()', 'now()', 'https://robohash.org/eaquequidoloribus.png?size=50x50&set=set1', 5, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 4, 128.38);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Gamera the Brave', 'now()', 'now()', 'https://robohash.org/inventoreporrosunt.png?size=50x50&set=set1', 32, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 8, 100.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('He Loves Me... He Loves Me Not (À la folie... pas du tout)', 'now()', 'now()', 'https://robohash.org/architectoeumvoluptatem.png?size=50x50&set=set1', 24, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 10, 139.36);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Family Jewels, The', 'now()', 'now()', 'https://robohash.org/quiasuntnesciunt.png?size=50x50&set=set1', 28, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 10, 74.53);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bend It Like Beckham', 'now()', 'now()', 'https://robohash.org/accusantiumaperiamet.png?size=50x50&set=set1', 77, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 10, 133.4);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tangled Ever After', 'now()', 'now()', 'https://robohash.org/cumdoloribusfacilis.png?size=50x50&set=set1', 92, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 6, 23.94);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ice Age: A Mammoth Christmas', 'now()', 'now()', 'https://robohash.org/itaquequamexpedita.png?size=50x50&set=set1', 50, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 6, 171.65);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Summer Interlude (Sommarlek)', 'now()', 'now()', 'https://robohash.org/quibusdamblanditiiseligendi.png?size=50x50&set=set1', 19, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, 72.98);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('To Gillian on Her 37th Birthday', 'now()', 'now()', 'https://robohash.org/utinipsum.png?size=50x50&set=set1', 35, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 3, 20.84);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('X-Men Origins: Wolverine', 'now()', 'now()', 'https://robohash.org/uteaqueea.png?size=50x50&set=set1', 4, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, 32.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Plain Dirty (a.k.a. Briar Patch)', 'now()', 'now()', 'https://robohash.org/quiavitaevoluptas.png?size=50x50&set=set1', 63, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, 163.49);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Animal, The', 'now()', 'now()', 'https://robohash.org/utvoluptatesnesciunt.png?size=50x50&set=set1', 48, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, 154.02);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Gilda', 'now()', 'now()', 'https://robohash.org/architectosintet.png?size=50x50&set=set1', 96, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 9, 141.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Counsellor at Law', 'now()', 'now()', 'https://robohash.org/voluptateseumearum.png?size=50x50&set=set1', 85, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, 114.9);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Peter Pan', 'now()', 'now()', 'https://robohash.org/molestiaevoluptatumnumquam.png?size=50x50&set=set1', 69, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 5, 156.79);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Seaside (Bord de Mer)', 'now()', 'now()', 'https://robohash.org/optiositnon.png?size=50x50&set=set1', 85, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 10, 140.49);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Shoot First, Die Later', 'now()', 'now()', 'https://robohash.org/sedmaioresrerum.png?size=50x50&set=set1', 63, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 8, 27.65);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('I Could Never Be Your Woman', 'now()', 'now()', 'https://robohash.org/repudiandaedoloremesse.png?size=50x50&set=set1', 20, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 7, 67.43);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bad News Bears in Breaking Training, The', 'now()', 'now()', 'https://robohash.org/suntenimoptio.png?size=50x50&set=set1', 100, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 7, 64.95);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Spanish Prisoner, The', 'now()', 'now()', 'https://robohash.org/optiolaborumitaque.png?size=50x50&set=set1', 97, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 6, 135.42);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Uranus', 'now()', 'now()', 'https://robohash.org/doloremcorporissunt.png?size=50x50&set=set1', 9, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 10, 35.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Flintstones in Viva Rock Vegas, The', 'now()', 'now()', 'https://robohash.org/eumquasiblanditiis.png?size=50x50&set=set1', 15, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 8, 178.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Shanghai Ghetto', 'now()', 'now()', 'https://robohash.org/vitaenullaeos.png?size=50x50&set=set1', 66, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 7, 95.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bling Ring, The', 'now()', 'now()', 'https://robohash.org/eumetquia.png?size=50x50&set=set1', 97, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 50.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Professional, The (Le professionnel)', 'now()', 'now()', 'https://robohash.org/essevelplaceat.png?size=50x50&set=set1', 78, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 8, 131.58);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('He''s Just Not That Into You', 'now()', 'now()', 'https://robohash.org/dictaplaceatmolestias.png?size=50x50&set=set1', 32, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 5, 85.54);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sweet Home Alabama', 'now()', 'now()', 'https://robohash.org/ipsamdoloremquevero.png?size=50x50&set=set1', 16, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 9, 109.36);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Too Late Blues', 'now()', 'now()', 'https://robohash.org/omnisitaquerem.png?size=50x50&set=set1', 95, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 7, 35.42);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ocean''s Thirteen', 'now()', 'now()', 'https://robohash.org/eoshicquae.png?size=50x50&set=set1', 41, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 2, 33.91);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Donkey Hide (Oslinaya shkura)', 'now()', 'now()', 'https://robohash.org/accusamusestvel.png?size=50x50&set=set1', 25, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 7, 51.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('WikiRebels: The Documentary', 'now()', 'now()', 'https://robohash.org/ipsamofficiiseos.png?size=50x50&set=set1', 23, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 9, 111.81);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Swordsman II (Legend of the Swordsman, The) (Xiao ao jiang hu zhi: Dong Fang Bu Bai)', 'now()', 'now()', 'https://robohash.org/autrerumsimilique.png?size=50x50&set=set1', 25, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 4, 97.03);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Hidden Assassin (Shooter, The)', 'now()', 'now()', 'https://robohash.org/doloreinciduntea.png?size=50x50&set=set1', 6, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 3, 168.84);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Midnight Cowboy', 'now()', 'now()', 'https://robohash.org/repellatmollitiaut.png?size=50x50&set=set1', 2, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 7, 89.39);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Everything Put Together', 'now()', 'now()', 'https://robohash.org/estdoloresid.png?size=50x50&set=set1', 8, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 7, 155.09);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Alpha Dog', 'now()', 'now()', 'https://robohash.org/etnonet.png?size=50x50&set=set1', 17, 'Fusce consequat. Nulla nisl. Nunc nisl.', 8, 51.43);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Island President, The', 'now()', 'now()', 'https://robohash.org/expeditaquinumquam.png?size=50x50&set=set1', 66, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 7, 131.53);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Cold Fever (Á köldum klaka)', 'now()', 'now()', 'https://robohash.org/laudantiumerrorsed.png?size=50x50&set=set1', 66, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 2, 62.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('City Lights', 'now()', 'now()', 'https://robohash.org/voluptateshicvel.png?size=50x50&set=set1', 50, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 4, 176.94);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Unreal Dream: The Michael Morton Story, An', 'now()', 'now()', 'https://robohash.org/consequaturrerumqui.png?size=50x50&set=set1', 66, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 9, 75.36);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Confessions of a Gangsta', 'now()', 'now()', 'https://robohash.org/ipsamestomnis.png?size=50x50&set=set1', 43, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 6, 140.59);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Run Lola Run (Lola rennt)', 'now()', 'now()', 'https://robohash.org/officiismaximefacere.png?size=50x50&set=set1', 14, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 9, 160.07);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Balance', 'now()', 'now()', 'https://robohash.org/sitnullacorporis.png?size=50x50&set=set1', 37, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 10, 169.28);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Waiting Room (Bekleme odasi)', 'now()', 'now()', 'https://robohash.org/voluptateenimofficia.png?size=50x50&set=set1', 84, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 5, 44.81);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Amityville 1992: It''s About Time', 'now()', 'now()', 'https://robohash.org/molestiaeutqui.png?size=50x50&set=set1', 51, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 3, 47.57);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Shanghai Calling', 'now()', 'now()', 'https://robohash.org/etoptioporro.png?size=50x50&set=set1', 48, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 10, 70.19);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Hunting Party, The', 'now()', 'now()', 'https://robohash.org/quasutsed.png?size=50x50&set=set1', 84, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 4, 76.46);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sexy Nights of the Living Dead', 'now()', 'now()', 'https://robohash.org/voluptatemvoluptascumque.png?size=50x50&set=set1', 80, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 10, 60.4);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Jay and Silent Bob Go Down Under', 'now()', 'now()', 'https://robohash.org/ipsamolestiaecorrupti.png?size=50x50&set=set1', 79, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 10, 97.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Taifu Club (Taifû kurabu)', 'now()', 'now()', 'https://robohash.org/accusantiumutsit.png?size=50x50&set=set1', 53, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 8, 168.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Point Blank', 'now()', 'now()', 'https://robohash.org/excepturiautconsectetur.png?size=50x50&set=set1', 26, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 7, 135.06);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sekirei', 'now()', 'now()', 'https://robohash.org/doloretnecessitatibus.png?size=50x50&set=set1', 51, 'Fusce consequat. Nulla nisl. Nunc nisl.', 10, 158.13);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Love Letter ', 'now()', 'now()', 'https://robohash.org/voluptateetpraesentium.png?size=50x50&set=set1', 35, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 5, 132.66);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dreamscape', 'now()', 'now()', 'https://robohash.org/laborumrepellendusquasi.png?size=50x50&set=set1', 46, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 5, 89.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('You''ll Find Out', 'now()', 'now()', 'https://robohash.org/estquibusdamipsam.png?size=50x50&set=set1', 45, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 9, 69.21);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('La Bandera', 'now()', 'now()', 'https://robohash.org/voluptatemautemdoloribus.png?size=50x50&set=set1', 44, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 10, 120.67);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Will Ferrell: You''re Welcome America - A Final Night with George W Bush', 'now()', 'now()', 'https://robohash.org/beataevelitsed.png?size=50x50&set=set1', 19, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 7, 175.77);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Get Over It', 'now()', 'now()', 'https://robohash.org/innisicupiditate.png?size=50x50&set=set1', 41, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 6, 106.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Noam Chomsky: Distorted Morality', 'now()', 'now()', 'https://robohash.org/minusquoconsequatur.png?size=50x50&set=set1', 80, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, 99.34);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Appaloosa', 'now()', 'now()', 'https://robohash.org/sedsitveritatis.png?size=50x50&set=set1', 36, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 8, 140.62);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('April''s Shower', 'now()', 'now()', 'https://robohash.org/commodiimpeditdolore.png?size=50x50&set=set1', 10, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 3, 123.38);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dahmer', 'now()', 'now()', 'https://robohash.org/magnamsinteum.png?size=50x50&set=set1', 98, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 6, 145.82);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Master, The', 'now()', 'now()', 'https://robohash.org/maioresinnobis.png?size=50x50&set=set1', 24, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 7, 170.41);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('What Fault Is It of Ours?', 'now()', 'now()', 'https://robohash.org/reiciendisquianihil.png?size=50x50&set=set1', 44, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 9, 28.29);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Conversation, The', 'now()', 'now()', 'https://robohash.org/illoomnisat.png?size=50x50&set=set1', 21, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 2, 91.0);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Postman, The', 'now()', 'now()', 'https://robohash.org/placeatetquia.png?size=50x50&set=set1', 62, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 2, 54.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Alfie', 'now()', 'now()', 'https://robohash.org/rerumquiinventore.png?size=50x50&set=set1', 43, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 2, 149.03);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Don''t Go Breaking My Heart (Daan gyun naam yu)', 'now()', 'now()', 'https://robohash.org/quibusdamsitmolestias.png?size=50x50&set=set1', 36, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 6, 149.63);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Botched', 'now()', 'now()', 'https://robohash.org/quibusdamimpeditlaborum.png?size=50x50&set=set1', 2, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 4, 174.83);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('We Need a Vacation (Fais-moi des vacances)', 'now()', 'now()', 'https://robohash.org/debitisquiaut.png?size=50x50&set=set1', 95, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 10, 63.21);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bigga Than Ben', 'now()', 'now()', 'https://robohash.org/minimaipsumfacilis.png?size=50x50&set=set1', 69, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 3, 148.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Nine Miles Down', 'now()', 'now()', 'https://robohash.org/earumsintfugiat.png?size=50x50&set=set1', 15, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 4, 115.91);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Nothing to Lose (a.k.a. Ten Benny)', 'now()', 'now()', 'https://robohash.org/nihilrepudiandaefuga.png?size=50x50&set=set1', 75, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 7, 78.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Paperman', 'now()', 'now()', 'https://robohash.org/dolorcommodiut.png?size=50x50&set=set1', 62, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 8, 77.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Borrower, The', 'now()', 'now()', 'https://robohash.org/commodiistequibusdam.png?size=50x50&set=set1', 8, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 2, 107.91);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('The Apocalypse', 'now()', 'now()', 'https://robohash.org/placeattotamquibusdam.png?size=50x50&set=set1', 5, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, 34.82);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Bittersweet Life, A (Dalkomhan insaeng)', 'now()', 'now()', 'https://robohash.org/adoditatque.png?size=50x50&set=set1', 73, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 3, 150.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Downtown', 'now()', 'now()', 'https://robohash.org/eumutodit.png?size=50x50&set=set1', 7, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 10, 64.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Carmen Comes Home (Karumen kokyo ni kaeru)', 'now()', 'now()', 'https://robohash.org/voluptatemblanditiisfugit.png?size=50x50&set=set1', 60, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 5, 69.15);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Lupin III: First Contact (Rupan Sansei: Faasuto Kontakuto)', 'now()', 'now()', 'https://robohash.org/autvoluptatemquia.png?size=50x50&set=set1', 90, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 6, 169.92);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Twilight Saga: Eclipse, The', 'now()', 'now()', 'https://robohash.org/iurevoluptatemharum.png?size=50x50&set=set1', 94, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 4, 29.46);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Deep in the Woods (Promenons-nous dans les bois)', 'now()', 'now()', 'https://robohash.org/molestiaeconsequaturnumquam.png?size=50x50&set=set1', 21, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 5, 156.03);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Quackser Fortune Has a Cousin in the Bronx', 'now()', 'now()', 'https://robohash.org/oditsedvoluptatibus.png?size=50x50&set=set1', 47, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, 94.72);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Satan''s Sword 3: The Final Chapter (Daibosatsu toge: Kanketsu-hen)', 'now()', 'now()', 'https://robohash.org/reiciendisquisipsum.png?size=50x50&set=set1', 3, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 10, 132.86);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Distinguished Gentleman, The', 'now()', 'now()', 'https://robohash.org/eossintsuscipit.png?size=50x50&set=set1', 33, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 9, 36.08);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Safe Conduct (Laissez-Passer)', 'now()', 'now()', 'https://robohash.org/molestiaenequedignissimos.png?size=50x50&set=set1', 36, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 7, 164.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('First Monday in October', 'now()', 'now()', 'https://robohash.org/eamaioresmolestiae.png?size=50x50&set=set1', 94, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 3, 147.5);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('I Hate Mondays, (Nie lubie poniedzialku)', 'now()', 'now()', 'https://robohash.org/quibusdamconsequunturaut.png?size=50x50&set=set1', 93, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 7, 37.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Endurance: Shackleton''s Legendary Antarctic Expedition, The', 'now()', 'now()', 'https://robohash.org/quononeum.png?size=50x50&set=set1', 63, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, 115.96);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tin Pan Alley', 'now()', 'now()', 'https://robohash.org/etrerumdoloremque.png?size=50x50&set=set1', 36, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 3, 174.65);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('House of the Spirits, The', 'now()', 'now()', 'https://robohash.org/voluptasassumendadolores.png?size=50x50&set=set1', 70, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 3, 45.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Birdemic: Shock and Terror', 'now()', 'now()', 'https://robohash.org/etdolorcorporis.png?size=50x50&set=set1', 35, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, 110.62);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('His Secret Life (a.k.a. Ignorant Fairies, The) (Fate ignoranti, Le)', 'now()', 'now()', 'https://robohash.org/velitmodiitaque.png?size=50x50&set=set1', 13, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, 150.58);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Kiss, The', 'now()', 'now()', 'https://robohash.org/utetqui.png?size=50x50&set=set1', 12, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 10, 62.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Six-String Samurai', 'now()', 'now()', 'https://robohash.org/dolorpossimusomnis.png?size=50x50&set=set1', 66, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 5, 41.69);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Moment After, The', 'now()', 'now()', 'https://robohash.org/noneadeserunt.png?size=50x50&set=set1', 5, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 4, 41.5);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ice Harvest, The', 'now()', 'now()', 'https://robohash.org/ducimusfugitmodi.png?size=50x50&set=set1', 80, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 2, 60.92);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Metallica: Some Kind of Monster', 'now()', 'now()', 'https://robohash.org/eoserrorsunt.png?size=50x50&set=set1', 6, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 10, 60.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Pluto''s Christmas Tree', 'now()', 'now()', 'https://robohash.org/quaerateiusfacere.png?size=50x50&set=set1', 26, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 7, 50.5);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Go', 'now()', 'now()', 'https://robohash.org/inventorenequeporro.png?size=50x50&set=set1', 24, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, 159.86);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Black Stallion Returns, The', 'now()', 'now()', 'https://robohash.org/perferendisautvelit.png?size=50x50&set=set1', 78, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 8, 136.61);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rocket, The', 'now()', 'now()', 'https://robohash.org/excepturiplaceatsed.png?size=50x50&set=set1', 75, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 2, 85.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Return, The (Vozvrashcheniye)', 'now()', 'now()', 'https://robohash.org/doloresconsequaturex.png?size=50x50&set=set1', 5, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 2, 22.11);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Nun''s Story, The', 'now()', 'now()', 'https://robohash.org/doloremquepraesentiumodio.png?size=50x50&set=set1', 47, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 3, 130.0);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sister Helen ', 'now()', 'now()', 'https://robohash.org/idnumquamaut.png?size=50x50&set=set1', 56, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 3, 76.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Notting Hill', 'now()', 'now()', 'https://robohash.org/voluptatemsaepeiure.png?size=50x50&set=set1', 97, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, 31.14);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Zero', 'now()', 'now()', 'https://robohash.org/eatemporibusipsum.png?size=50x50&set=set1', 46, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 6, 85.21);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Open Season', 'now()', 'now()', 'https://robohash.org/sintdolorumcupiditate.png?size=50x50&set=set1', 58, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, 108.71);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Black Cauldron, The', 'now()', 'now()', 'https://robohash.org/temporaanimiasperiores.png?size=50x50&set=set1', 75, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 7, 42.28);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Justice League: Crisis on Two Earths', 'now()', 'now()', 'https://robohash.org/nonliberoullam.png?size=50x50&set=set1', 5, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 7, 143.21);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Buffalo Soldiers', 'now()', 'now()', 'https://robohash.org/doloremquedoloresimilique.png?size=50x50&set=set1', 26, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 65.61);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Limbo', 'now()', 'now()', 'https://robohash.org/voluptatemfugaqui.png?size=50x50&set=set1', 96, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 10, 32.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Faces of Death 3', 'now()', 'now()', 'https://robohash.org/explicaboquidolores.png?size=50x50&set=set1', 36, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 10, 88.05);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Sherlock Holmes: Dressed to Kill', 'now()', 'now()', 'https://robohash.org/autnonquibusdam.png?size=50x50&set=set1', 56, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 8, 162.12);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tuesday, After Christmas (Marti, dupa craciun)', 'now()', 'now()', 'https://robohash.org/quiaillumautem.png?size=50x50&set=set1', 55, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 8, 69.32);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Ruby', 'now()', 'now()', 'https://robohash.org/voluptateminet.png?size=50x50&set=set1', 79, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 4, 135.04);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Gone Fishin''', 'now()', 'now()', 'https://robohash.org/blanditiisquiaeligendi.png?size=50x50&set=set1', 57, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 3, 129.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rob Roy', 'now()', 'now()', 'https://robohash.org/estnequeet.png?size=50x50&set=set1', 74, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 10, 168.76);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dragonlance: Dragons of Autumn Twilight', 'now()', 'now()', 'https://robohash.org/ullamadrem.png?size=50x50&set=set1', 88, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 8, 115.36);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Adventures of Mark Twain, The', 'now()', 'now()', 'https://robohash.org/cupiditateanimiconsequatur.png?size=50x50&set=set1', 30, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 7, 60.48);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Dr. Jekyll and Mr. Hyde', 'now()', 'now()', 'https://robohash.org/velitrepudiandaeet.png?size=50x50&set=set1', 53, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 6, 35.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Face of Terror', 'now()', 'now()', 'https://robohash.org/quodquisdolorum.png?size=50x50&set=set1', 12, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 6, 60.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Spirit of St. Louis, The', 'now()', 'now()', 'https://robohash.org/voluptatumtemporeperferendis.png?size=50x50&set=set1', 16, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 10, 164.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Prince and the Pauper, The', 'now()', 'now()', 'https://robohash.org/odioconsequaturfacere.png?size=50x50&set=set1', 26, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 5, 76.98);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Killing Them Softly', 'now()', 'now()', 'https://robohash.org/delenitisuntet.png?size=50x50&set=set1', 2, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 10, 147.6);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('I Know That Voice', 'now()', 'now()', 'https://robohash.org/dolorfugaut.png?size=50x50&set=set1', 31, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 6, 49.88);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Heaven''s Prisoners', 'now()', 'now()', 'https://robohash.org/autliberobeatae.png?size=50x50&set=set1', 98, 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 9, 57.0);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Woodstock Diary', 'now()', 'now()', 'https://robohash.org/quosdoloremsint.png?size=50x50&set=set1', 39, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, 165.63);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Underclassman', 'now()', 'now()', 'https://robohash.org/nesciuntoditesse.png?size=50x50&set=set1', 11, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 7, 30.3);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('War of the Arrows (Choi-jong-byeong-gi Hwal)', 'now()', 'now()', 'https://robohash.org/itaquemollitiaaspernatur.png?size=50x50&set=set1', 31, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 8, 39.95);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Raising Cain', 'now()', 'now()', 'https://robohash.org/liberodistinctioet.png?size=50x50&set=set1', 54, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 2, 113.32);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('From the Earth to the Moon', 'now()', 'now()', 'https://robohash.org/ametatqueautem.png?size=50x50&set=set1', 30, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 9, 51.24);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Peacock', 'now()', 'now()', 'https://robohash.org/repellatutconsequuntur.png?size=50x50&set=set1', 5, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 9, 162.32);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Guru, The', 'now()', 'now()', 'https://robohash.org/repellendusquiaad.png?size=50x50&set=set1', 18, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 2, 116.97);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Cherry 2000', 'now()', 'now()', 'https://robohash.org/doloresitquam.png?size=50x50&set=set1', 68, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2, 179.71);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('47 Samurai (Chûshingura) (Loyal 47 Ronin, The)', 'now()', 'now()', 'https://robohash.org/idvoluptasipsam.png?size=50x50&set=set1', 42, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, 68.26);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Passengers', 'now()', 'now()', 'https://robohash.org/undeiuredolor.png?size=50x50&set=set1', 42, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 3, 57.9);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('8 (8, the Play)', 'now()', 'now()', 'https://robohash.org/utdolorumsit.png?size=50x50&set=set1', 29, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 4, 159.23);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Camp', 'now()', 'now()', 'https://robohash.org/voluptatemvoluptasvoluptatem.png?size=50x50&set=set1', 68, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 4, 75.65);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Thor: Tales of Asgard', 'now()', 'now()', 'https://robohash.org/saepecupiditatenam.png?size=50x50&set=set1', 49, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 164.81);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Paragraph 175', 'now()', 'now()', 'https://robohash.org/nonabest.png?size=50x50&set=set1', 76, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 7, 169.57);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Vinyl', 'now()', 'now()', 'https://robohash.org/quifugiatut.png?size=50x50&set=set1', 70, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 8, 115.22);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Stealing Home', 'now()', 'now()', 'https://robohash.org/architectoquiaiure.png?size=50x50&set=set1', 28, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 9, 100.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Splice', 'now()', 'now()', 'https://robohash.org/quianumquamaspernatur.png?size=50x50&set=set1', 41, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 9, 135.86);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Clone (Womb)', 'now()', 'now()', 'https://robohash.org/eosistequis.png?size=50x50&set=set1', 59, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 5, 68.71);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Macheads', 'now()', 'now()', 'https://robohash.org/sedblanditiisvelit.png?size=50x50&set=set1', 36, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 10, 98.83);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Nighthawks', 'now()', 'now()', 'https://robohash.org/laboriosamsitnulla.png?size=50x50&set=set1', 58, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 5, 49.74);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('King of Texas, The', 'now()', 'now()', 'https://robohash.org/voluptatealiquamet.png?size=50x50&set=set1', 79, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 9, 59.8);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Blackadder''s Christmas Carol', 'now()', 'now()', 'https://robohash.org/oditofficiissit.png?size=50x50&set=set1', 38, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 3, 66.59);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tokyo Fiancée', 'now()', 'now()', 'https://robohash.org/mollitiaabaut.png?size=50x50&set=set1', 22, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 5, 113.26);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Patton Oswalt: Finest Hour', 'now()', 'now()', 'https://robohash.org/namfugitenim.png?size=50x50&set=set1', 50, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 9, 151.4);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Hum Aapke Hain Koun...!', 'now()', 'now()', 'https://robohash.org/delenitiautemvoluptatem.png?size=50x50&set=set1', 87, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 8, 157.01);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Magical Mystery Tour', 'now()', 'now()', 'https://robohash.org/arepellatpraesentium.png?size=50x50&set=set1', 61, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 5, 90.77);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Election Day', 'now()', 'now()', 'https://robohash.org/oditnullarem.png?size=50x50&set=set1', 94, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 9, 53.47);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Harmful Insect (Gaichu)', 'now()', 'now()', 'https://robohash.org/perferendisautvel.png?size=50x50&set=set1', 39, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 4, 152.34);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Midsummer Night''s Dream, A', 'now()', 'now()', 'https://robohash.org/magnamundemollitia.png?size=50x50&set=set1', 5, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 8, 140.16);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Reykjavik Whale Watching Massacre', 'now()', 'now()', 'https://robohash.org/rerumquisequi.png?size=50x50&set=set1', 16, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 6, 59.36);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Salut cousin!', 'now()', 'now()', 'https://robohash.org/laborumiuredolor.png?size=50x50&set=set1', 89, 'Fusce consequat. Nulla nisl. Nunc nisl.', 9, 42.1);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('American Pie 2', 'now()', 'now()', 'https://robohash.org/nobisutdolor.png?size=50x50&set=set1', 7, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 5, 63.66);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Tess of the Storm Country', 'now()', 'now()', 'https://robohash.org/sedquiased.png?size=50x50&set=set1', 54, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 8, 132.68);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Divorce - Italian Style (Divorzio all''italiana)', 'now()', 'now()', 'https://robohash.org/isteharumatque.png?size=50x50&set=set1', 82, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, 84.03);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Taking Chance', 'now()', 'now()', 'https://robohash.org/quistemporeet.png?size=50x50&set=set1', 51, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, 61.69);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Moonlight Serenade', 'now()', 'now()', 'https://robohash.org/repudiandaeomnistempore.png?size=50x50&set=set1', 21, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 6, 58.49);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Manborg', 'now()', 'now()', 'https://robohash.org/cumquealiquidnon.png?size=50x50&set=set1', 80, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 7, 169.11);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Almost Heroes', 'now()', 'now()', 'https://robohash.org/voluptateetcorporis.png?size=50x50&set=set1', 81, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 7, 168.28);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Twist', 'now()', 'now()', 'https://robohash.org/dolortemporaaliquid.png?size=50x50&set=set1', 79, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 7, 109.56);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Off the Menu: The Last Days of Chasen''s', 'now()', 'now()', 'https://robohash.org/nisiofficiisbeatae.png?size=50x50&set=set1', 64, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, 54.03);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Last American Virgin, The', 'now()', 'now()', 'https://robohash.org/doloreipsumab.png?size=50x50&set=set1', 56, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 8, 173.34);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Doggiewoggiez! Poochiewoochiez!', 'now()', 'now()', 'https://robohash.org/molestiaecommodiquis.png?size=50x50&set=set1', 36, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 8, 160.13);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Iran Job, The', 'now()', 'now()', 'https://robohash.org/illumquodsimilique.png?size=50x50&set=set1', 59, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, 94.75);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Directed by John Ford', 'now()', 'now()', 'https://robohash.org/nisifaceresint.png?size=50x50&set=set1', 42, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, 103.08);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rules of Attraction, The', 'now()', 'now()', 'https://robohash.org/etlaborumsunt.png?size=50x50&set=set1', 46, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 3, 58.23);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Executive Target', 'now()', 'now()', 'https://robohash.org/minimaenimexcepturi.png?size=50x50&set=set1', 33, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, 66.85);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Twelve Angry Men', 'now()', 'now()', 'https://robohash.org/nisimagnamfacilis.png?size=50x50&set=set1', 37, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 9, 46.8);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Mitchell', 'now()', 'now()', 'https://robohash.org/hicsederror.png?size=50x50&set=set1', 22, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 10, 70.54);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Working Class Goes to Heaven, The (a.k.a. Lulu the Tool) (La classe operaia va in paradiso)', 'now()', 'now()', 'https://robohash.org/laboreesseut.png?size=50x50&set=set1', 83, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 3, 49.63);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Because I Said So', 'now()', 'now()', 'https://robohash.org/vitaenonqui.png?size=50x50&set=set1', 42, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 7, 47.11);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Quest, The', 'now()', 'now()', 'https://robohash.org/aliasquasiinventore.png?size=50x50&set=set1', 73, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 2, 154.18);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Desert Heat (Inferno)', 'now()', 'now()', 'https://robohash.org/sedperferendisid.png?size=50x50&set=set1', 80, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 6, 160.66);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Man and a Woman, A (Un homme et une femme)', 'now()', 'now()', 'https://robohash.org/autvoluptatemporro.png?size=50x50&set=set1', 64, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, 130.94);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Taxi Blues', 'now()', 'now()', 'https://robohash.org/minusremperferendis.png?size=50x50&set=set1', 37, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 6, 132.99);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Métisse (Café au Lait)', 'now()', 'now()', 'https://robohash.org/adipisciassumendaet.png?size=50x50&set=set1', 25, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 10, 85.51);
insert into "book" (name, "updatedAt", "createdAt", avatar, "authorId", description, "genreId", rent_price) values ('Rear Window', 'now()', 'now()', 'https://robohash.org/dignissimosautut.png?size=50x50&set=set1', 92, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 2, 115.21);
		`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			DROP TABLE "book"
		`);
  }
}
