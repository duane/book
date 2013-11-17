'use strict';

angular.module('book.mockFetcher', []).
  factory('mockFetcher', ['$q', '$interpolate', '$httpBackend', function($q, $interpolate, $httpBackend) {
    var books = {
      "9780141972060": {
          "accessInfo": {
              "accessViewStatus": "NONE",
              "country": "CH",
              "embeddable": false,
              "epub": {
                  "isAvailable": true
              },
              "pdf": {
                  "isAvailable": true
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "NO_PAGES",
              "webReaderLink": "http://books.google.ch/books/reader?id=x-HkLDC96EkC&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "nW1+V1q/xu8",
          "id": "x-HkLDC96EkC",
          "kind": "books#volume",
          "saleInfo": {
              "country": "CH",
              "isEbook": false,
              "saleability": "NOT_FOR_SALE"
          },
          "searchInfo": {
              "textSnippet": "The same expansiveness, humour and contagious zest for life that sparked the earlier novels sparks this one too, but through a more cohesive story. The books follow two young men engaged in a passionate search for dharma or truth."
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/x-HkLDC96EkC",
          "volumeInfo": {
              "authors": [
                  "Jack Kerouac"
              ],
              "averageRating": 4,
              "canonicalVolumeLink": "http://books.google.ch/books/about/The_Dharma_Bums.html?hl=&id=x-HkLDC96EkC",
              "categories": [
                  "Fiction"
              ],
              "contentVersion": "0.2.0.0.preview.2",
              "description": "THE DHARMA BUMS appeared just one year after the author's explosive ON THE ROAD had put the Beat Generation on the literary map and Kerouac on the best-seller list. The same expansiveness, humour and contagious zest for life that sparked the earlier novels sparks this one too, but through a more cohesive story. The books follow two young men engaged in a passionate search for dharma or truth. Their major adventure is the pursuit of the Zen way, which takes them climbing into the high sierras to seek the lesson of solitude. With an Introduction by Kerouac expert, Ann Douglas.",
              "imageLinks": {
                  "smallThumbnail": "http://bks0.books.google.ch/books?id=x-HkLDC96EkC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "images/9780141972060.png"
              },
              "industryIdentifiers": [
                  {
                      "identifier": "0141972068",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9780141972060",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=x-HkLDC96EkC&dq=isbn:9780141972060&hl=&source=gbs_api",
              "language": "en",
              "pageCount": 224,
              "previewLink": "http://books.google.ch/books?id=x-HkLDC96EkC&dq=isbn:9780141972060&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "publishedDate": "2011-07-21",
              "publisher": "Penguin UK",
              "ratingsCount": 239,
              "title": "The Dharma Bums"
          }
      },
      "9780141974101": {
          "accessInfo": {
              "accessViewStatus": "NONE",
              "country": "CH",
              "embeddable": false,
              "epub": {
                  "isAvailable": true
              },
              "pdf": {
                  "isAvailable": true
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "NO_PAGES",
              "webReaderLink": "http://books.google.ch/books/reader?id=Pt-4PIctHQEC&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "DvpJVM+H+ZU",
          "id": "Pt-4PIctHQEC",
          "kind": "books#volume",
          "saleInfo": {
              "country": "CH",
              "isEbook": false,
              "saleability": "NOT_FOR_SALE"
          },
          "searchInfo": {
              "textSnippet": "The Penguin English Library - 100 editions of the best fiction in English, from the eighteenth century and the very first novels to the beginning of the First World War."
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/Pt-4PIctHQEC",
          "volumeInfo": {
              "authors": [
                  "D. H. Lawrence"
              ],
              "averageRating": 3,
              "canonicalVolumeLink": "http://books.google.ch/books/about/Sons_and_Lovers.html?hl=&id=Pt-4PIctHQEC",
              "categories": [
                  "Fiction"
              ],
              "contentVersion": "1.5.3.0.preview.2",
              "description": "'\"She was a brazen hussy.\" \"She wasn't. - And she was pretty, wasn't she?\" \"I didn't look ... And tell your girls, my son, that when they're running after you, they're not to come and ask your mother for you - tell them that - brazen baggages you meet at dancing classes\"' The marriage of Gertrude and Walter Morel has become a battleground. Repelled by her uneducated and sometimes violent husband, delicate Gertrude devotes her life to her children, especially to her sons, William and Paul - determined they will not follow their father into working down the coal mines. But conflict is evitable when Paul seeks to escape his mother's suffocating grasp through relationships with women his own age. Set in Lawrence's native Nottinghamshire, Sons and Lovers is a highly autobiographical and compelling portrayal of childhood, adolescence and the clash of generations. The Penguin English Library - 100 editions of the best fiction in English, from the eighteenth century and the very first novels to the beginning of the First World War.",
              "imageLinks": {
                  "smallThumbnail": "http://bks6.books.google.ch/books?id=Pt-4PIctHQEC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "images/9780141974101.png"
              },
              "industryIdentifiers": [
                  {
                      "identifier": "0141974109",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9780141974101",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=Pt-4PIctHQEC&dq=isbn:9780141974101&hl=&source=gbs_api",
              "language": "en",
              "pageCount": 608,
              "previewLink": "http://books.google.ch/books?id=Pt-4PIctHQEC&dq=isbn:9780141974101&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "publishedDate": "2012-09-27",
              "publisher": "Penguin UK",
              "ratingsCount": 23,
              "title": "Sons and Lovers"
          }
      },
      "9780316679299": {
          "accessInfo": {
              "accessViewStatus": "NONE",
              "country": "CH",
              "embeddable": false,
              "epub": {
                  "isAvailable": false
              },
              "pdf": {
                  "isAvailable": false
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "NO_PAGES",
              "webReaderLink": "http://books.google.ch/books/reader?id=eOalPwAACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "c8drw/F0//0",
          "id": "eOalPwAACAAJ",
          "kind": "books#volume",
          "saleInfo": {
              "country": "CH",
              "isEbook": false,
              "saleability": "NOT_FOR_SALE"
          },
          "searchInfo": {
              "textSnippet": "On the whole, though, I&#39;m very hopeful. I love working on these Glass stories, I&#39;ve been waiting for them most of my life, and I think I have fairly decent, monomaniacal plans to finish them with due care and all-available skill."
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/eOalPwAACAAJ",
          "volumeInfo": {
              "authors": [
                  "J. D. Salinger"
              ],
              "averageRating": 3.5,
              "canonicalVolumeLink": "http://books.google.ch/books/about/Franny_and_Zooey.html?hl=&id=eOalPwAACAAJ",
              "contentVersion": "preview-1.0.0",
              "description": "The author writes: FRANNY came out in The New Yorker in 1955, and was swiftly followed, in 1957 by ZOOEY. Both stories are early, critical entries in a narrative series I'm doing about a family of settlers in twentieth-century New York, the Glasses. It is a long-term project, patently an ambiguous one, and there is a real-enough danger, I suppose that sooner or later I'll bog down, perhaps disappear entirely, in my own methods, locutions, and mannerisms. On the whole, though, I'm very hopeful. I love working on these Glass stories, I've been waiting for them most of my life, and I think I have fairly decent, monomaniacal plans to finish them with due care and all-available skill.",
              "industryIdentifiers": [
                  {
                      "identifier": "0316679291",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9780316679299",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=eOalPwAACAAJ&dq=isbn:9780316679299&hl=&source=gbs_api",
              "language": "en",
              "previewLink": "http://books.google.ch/books?id=eOalPwAACAAJ&dq=isbn:9780316679299&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "publishedDate": "2001-02-06",
              "ratingsCount": 182,
              "title": "Franny and Zooey"
          }
      },
      "9780316920049": {
          "accessInfo": {
              "accessViewStatus": "NONE",
              "country": "CH",
              "embeddable": false,
              "epub": {
                  "isAvailable": false
              },
              "pdf": {
                  "isAvailable": false
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "NO_PAGES",
              "webReaderLink": "http://books.google.ch/books/reader?id=ooednQEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "FSItzECthdw",
          "id": "ooednQEACAAJ",
          "kind": "books#volume",
          "saleInfo": {
              "country": "CH",
              "isEbook": false,
              "saleability": "NOT_FOR_SALE"
          },
          "searchInfo": {
              "textSnippet": "A gargantuan, mind-altering comedy about the Pursuit of Happiness in America set in an addicts&#39; halfway house and a tennis academy, and featuring the most endearingly screwed-up family to come along in recent fiction, Infinite Jest explores ..."
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/ooednQEACAAJ",
          "volumeInfo": {
              "authors": [
                  "David Foster Wallace"
              ],
              "averageRating": 3.5,
              "canonicalVolumeLink": "http://books.google.ch/books/about/Infinite_Jest.html?hl=&id=ooednQEACAAJ",
              "categories": [
                  "Addicts"
              ],
              "contentVersion": "preview-1.0.0",
              "description": "A spoof on our culture featuring a drug-and-alcohol rehabilitation house near Boston. The center becomes a hotbed of revolutionary activity by Quebec separatists in revolt against the Organization of North American Nations which now rules the continent.",
              "imageLinks": {
                  "smallThumbnail": "http://bks9.books.google.ch/books?id=ooednQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "images/9780316920049.png"
              },
              "industryIdentifiers": [
                  {
                      "identifier": "0316920045",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9780316920049",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=ooednQEACAAJ&dq=isbn:9780316920049&hl=&source=gbs_api",
              "language": "en",
              "pageCount": 1079,
              "previewLink": "http://books.google.ch/books?id=ooednQEACAAJ&dq=isbn:9780316920049&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "publishedDate": "2006",
              "ratingsCount": 40,
              "subtitle": "A Novel",
              "title": "Infinite Jest"
          }
      },
      "9780321534965": {
          "accessInfo": {
              "accessViewStatus": "NONE",
              "country": "CH",
              "embeddable": false,
              "epub": {
                  "isAvailable": false
              },
              "pdf": {
                  "isAvailable": false
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "NO_PAGES",
              "webReaderLink": "http://books.google.ch/books/reader?id=840inQEACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "cDzfo5QTRbc",
          "id": "840inQEACAAJ",
          "kind": "books#volume",
          "saleInfo": {
              "country": "CH",
              "isEbook": false,
              "saleability": "NOT_FOR_SALE"
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/840inQEACAAJ",
          "volumeInfo": {
              "authors": [
                  "Donald Ervin Knuth"
              ],
              "averageRating": 4.5,
              "canonicalVolumeLink": "http://books.google.ch/books/about/The_Art_of_Computer_Programming.html?hl=&id=840inQEACAAJ",
              "categories": [
                  "Algorithms"
              ],
              "contentVersion": "preview-1.0.0",
              "imageLinks": {
                  "smallThumbnail": "http://bks5.books.google.ch/books?id=840inQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                  "thumbnail": "images/9780321534965.png"
              },
              "industryIdentifiers": [
                  {
                      "identifier": "0321534964",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9780321534965",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=840inQEACAAJ&dq=isbn:9780321534965&hl=&source=gbs_api",
              "language": "en",
              "previewLink": "http://books.google.ch/books?id=840inQEACAAJ&dq=isbn:9780321534965&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "ratingsCount": 20,
              "title": "The Art of Computer Programming"
          }
      },
      "9780345917430": {
          "accessInfo": {
              "accessViewStatus": "NONE",
              "country": "CH",
              "embeddable": false,
              "epub": {
                  "isAvailable": false
              },
              "pdf": {
                  "isAvailable": false
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "NO_PAGES",
              "webReaderLink": "http://books.google.ch/books/reader?id=GCOZQgAACAAJ&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "gxV0Ks1YQwM",
          "id": "GCOZQgAACAAJ",
          "kind": "books#volume",
          "saleInfo": {
              "country": "CH",
              "isEbook": false,
              "saleability": "NOT_FOR_SALE"
          },
          "searchInfo": {
              "textSnippet": "Thus begins J.R.R. Tolkien&#39;s classic &quot;The Lord of the Rings, which continues in &quot;Two Towers and &quot;The Return of the King."
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/GCOZQgAACAAJ",
          "volumeInfo": {
              "authors": [
                  "J R R Tolkien"
              ],
              "averageRating": 4,
              "canonicalVolumeLink": "http://books.google.ch/books/about/The_Fellowship_of_the_Ring.html?hl=&id=GCOZQgAACAAJ",
              "contentVersion": "preview-1.0.0",
              "description": "THE GREATEST FANTASY EPIC OF OUR TIME The dark, fearsome Ringwraiths were searching for a hobbit. Frodo Baggins knew they were seeking him and the Ring he bore\u2013the Ring of Power that would enable evil Sauron to destroy all that was good in Middle-earth. Now it is up to Frodo and his faithful servant, Sam, with a small band of companions, to carry the Ring to the one place it could be destroyed\u2013Mount Doom, in the very center of Sauron\u2019s dark kingdom. Thus begins J.R.R. Tolkien\u2019s classic The Lord of the Rings, which continues in Two Towers and The Return of the King.",
              "industryIdentifiers": [
                  {
                      "identifier": "034591743X",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9780345917430",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=GCOZQgAACAAJ&dq=isbn:9780345917430&hl=&source=gbs_api",
              "language": "en",
              "pageCount": 406,
              "previewLink": "http://books.google.ch/books?id=GCOZQgAACAAJ&dq=isbn:9780345917430&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "publishedDate": "1999-07-01",
              "publisher": "Ballantine Books",
              "ratingsCount": 83,
              "subtitle": "Being the First Part of the Lord of the Rings",
              "title": "The Fellowship of the Ring"
          }
      },
      "9780872200142": {
          "accessInfo": {
              "accessViewStatus": "SAMPLE",
              "country": "CH",
              "embeddable": true,
              "epub": {
                  "isAvailable": false
              },
              "pdf": {
                  "isAvailable": false
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "PARTIAL",
              "webReaderLink": "http://books.google.ch/books/reader?id=Zn501XwAkMoC&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "E0HkFPRTk1w",
          "id": "Zn501XwAkMoC",
          "kind": "books#volume",
          "saleInfo": {
              "country": "CH",
              "isEbook": false,
              "saleability": "NOT_FOR_SALE"
          },
          "searchInfo": {
              "textSnippet": "&quot;Like Hanslick, Professor Payzant is both musician and philosopher; and he has brought the knowledge and insights of both disciplines to this large undertaking.&quot; -- Gordon Epperson, Journal of Aesthetics &amp; Art Criticism"
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/Zn501XwAkMoC",
          "volumeInfo": {
              "authors": [
                  "Eduard Hanslick"
              ],
              "averageRating": 3.5,
              "canonicalVolumeLink": "http://books.google.ch/books/about/On_the_Musically_Beautiful.html?hl=&id=Zn501XwAkMoC",
              "categories": [
                  "Philosophy"
              ],
              "contentVersion": "0.0.1.0.preview.1",
              "description": "\"Like Hanslick, Professor Payzant is both musician and philosopher; and he has brought the knowledge and insights of both disciplines to this large undertaking.\" -- Gordon Epperson, Journal of Aesthetics & Art Criticism",
              "imageLinks": {
                  "smallThumbnail": "http://bks1.books.google.ch/books?id=Zn501XwAkMoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                  "thumbnail": "images/9780872200142.png"
              },
              "industryIdentifiers": [
                  {
                      "identifier": "0872200140",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9780872200142",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=Zn501XwAkMoC&dq=isbn:9780872200142&hl=&source=gbs_api",
              "language": "en",
              "pageCount": 127,
              "previewLink": "http://books.google.ch/books?id=Zn501XwAkMoC&printsec=frontcover&dq=isbn:9780872200142&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "publishedDate": "1986-01-01",
              "publisher": "Hackett Publishing",
              "ratingsCount": 3,
              "subtitle": "A Contribution Towards the Revision of the Aesthetics of Music",
              "title": "On the Musically Beautiful"
          }
      },
      "9781429997041": {
          "accessInfo": {
              "accessViewStatus": "SAMPLE",
              "country": "CH",
              "embeddable": true,
              "epub": {
                  "acsTokenLink": "http://books.google.ch/books/download/Speak-sample-epub.acsm?id=0SSoFvWQSD0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
                  "isAvailable": true
              },
              "pdf": {
                  "isAvailable": false
              },
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "viewability": "PARTIAL",
              "webReaderLink": "http://books.google.ch/books/reader?id=0SSoFvWQSD0C&hl=&printsec=frontcover&output=reader&source=gbs_api"
          },
          "etag": "o2yvhGd39KU",
          "id": "0SSoFvWQSD0C",
          "kind": "books#volume",
          "saleInfo": {
              "buyLink": "http://books.google.ch/books?id=0SSoFvWQSD0C&dq=isbn:9781429997041&hl=&buy=&source=gbs_api",
              "country": "CH",
              "isEbook": true,
              "listPrice": {
                  "amount": 9.75,
                  "currencyCode": "CHF"
              },
              "offers": [
                  {
                      "finskyOfferType": 1,
                      "listPrice": {
                          "amountInMicros": 9750000,
                          "currencyCode": "CHF"
                      },
                      "retailPrice": {
                          "amountInMicros": 6630000,
                          "currencyCode": "CHF"
                      }
                  }
              ],
              "retailPrice": {
                  "amount": 6.63,
                  "currencyCode": "CHF"
              },
              "saleability": "FOR_SALE"
          },
          "searchInfo": {
              "textSnippet": "&quot;Speak up for yourself--we want to know what you have to say.&quot; From the first moment of her freshman year at Merryweather High, Melinda knows this is a big fat lie, part of the nonsense of high school."
          },
          "selfLink": "https://www.googleapis.com/books/v1/volumes/0SSoFvWQSD0C",
          "volumeInfo": {
              "authors": [
                  "Laurie Halse Anderson"
              ],
              "averageRating": 4,
              "canonicalVolumeLink": "http://books.google.ch/books/about/Speak.html?hl=&id=0SSoFvWQSD0C",
              "categories": [
                  "Juvenile Fiction"
              ],
              "contentVersion": "0.1.2.0.preview.2",
              "description": "The first ten lies they tell you in high school. \"Speak up for yourself--we want to know what you have to say.\" From the first moment of her freshman year at Merryweather High, Melinda knows this is a big fat lie, part of the nonsense of high school. She is friendless, outcast, because she busted an end-of-summer party by calling the cops, so now nobody will talk to her, let alone listen to her. As time passes, she becomes increasingly isolated and practically stops talking altogether. Only her art class offers any solace, and it is through her work on an art project that she is finally able to face what really happened at that terrible party: she was raped by an upperclassman, a guy who still attends Merryweather and is still a threat to her. Her healing process has just begun when she has another violent encounter with him. But this time Melinda fights back, refuses to be silent, and thereby achieves a measure of vindication. In Laurie Halse Anderson's powerful novel, an utterly believable heroine with a bitterly ironic voice delivers a blow to the hypocritical world of high school. She speaks for many a disenfranchised teenager while demonstrating the importance of speaking up for oneself. Speak was a 1999 National Book Award Finalist for Young People's Literature.",
              "imageLinks": {
                  "smallThumbnail": "http://bks0.books.google.ch/books?id=0SSoFvWQSD0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                  "thumbnail": "images/9781429997041.png"
              },
              "industryIdentifiers": [
                  {
                      "identifier": "1429997044",
                      "type": "ISBN_10"
                  },
                  {
                      "identifier": "9781429997041",
                      "type": "ISBN_13"
                  }
              ],
              "infoLink": "http://books.google.ch/books?id=0SSoFvWQSD0C&dq=isbn:9781429997041&hl=&source=gbs_api",
              "language": "en",
              "pageCount": 224,
              "previewLink": "http://books.google.ch/books?id=0SSoFvWQSD0C&printsec=frontcover&dq=isbn:9781429997041&hl=&cd=1&source=gbs_api",
              "printType": "BOOK",
              "publishedDate": "2011-05-10",
              "publisher": "Macmillan",
              "ratingsCount": 3195,
              "title": "Speak"
          }
        }
      };
    return {
      fetchMany: function(isbn) {
        var deferred = $q.defer();
        if (isbn in books) {
          var info = books[isbn].volumeInfo;
          var book = {
            authors: info.authors,
            title: info.title
          };

          if ('imageLinks' in info) {
            book.thumbnail = info.imageLinks.thumbnail;
          }
          deferred.resolve([book]);
        } else {
          deferred.resolve([]);
        }
        return deferred.promise;
      },
      mountBackend: function() {
        for (var isbn in books) {
          $httpBackend.when('GET',
                            'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDJKfcjr_IO7bfA9B5i9jRGhdiAeTL7yl4&q=isbn:'.concat(isbn)).
                       respond({
                         kind: 'books#volume',
                         totalItems: 1,
                         items: [books[isbn]]
                       });
        }
      }
    };
  }]);