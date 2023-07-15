import React from 'react'

function FeaturedProducts() {

    const arr = [
      {
        "_id": 1,
        "title": "Unlocking Android",
        "isbn": "1933988673",
        "pageCount": 416,
        "publishedDate": {
            "$date": "2009-04-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        "status": "PUBLISH",
        "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
        "categories": ["Open Source", "Mobile"]
    }, {
        "_id": 2,
        "title": "Android in Action, Second Edition",
        "isbn": "1935182722",
        "pageCount": 592,
        "publishedDate": {
            "$date": "2011-01-14T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
        "status": "PUBLISH",
        "authors": ["W. Frank Ableson", "Robi Sen"],
        "categories": ["Java"]
    }, {
        "_id": 3,
        "title": "Specification by Example",
        "isbn": "1617290084",
        "pageCount": 0,
        "publishedDate": {
            "$date": "2011-06-03T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
        "status": "PUBLISH",
        "authors": ["Gojko Adzic"],
        "categories": ["Software Engineering"]
    }, {
        "_id": 4,
        "title": "Flex 3 in Action",
        "isbn": "1933988746",
        "pageCount": 576,
        "publishedDate": {
            "$date": "2009-02-02T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
        "status": "PUBLISH",
        "authors": ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
        "categories": ["Internet"]
    }, {
        "_id": 5,
        "title": "Flex 4 in Action",
        "isbn": "1935182420",
        "pageCount": 600,
        "publishedDate": {
            "$date": "2010-11-15T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
        "status": "PUBLISH",
        "authors": ["Tariq Ahmed", "Dan Orlando", "John C. Bland II", "Joel Hooks"],
        "categories": ["Internet"]
    }, {
        "_id": 6,
        "title": "Collective Intelligence in Action",
        "isbn": "1933988312",
        "pageCount": 425,
        "publishedDate": {
            "$date": "2008-10-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
        "status": "PUBLISH",
        "authors": ["Satnam Alag"],
        "categories": ["Internet"]
    }, {
        "_id": 7,
        "title": "Zend Framework in Action",
        "isbn": "1933988320",
        "pageCount": 432,
        "publishedDate": {
            "$date": "2008-12-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
        "status": "PUBLISH",
        "authors": ["Rob Allen", "Nick Lo", "Steven Brown"],
        "categories": ["Web Development"]
    }, {
        "_id": 8,
        "title": "Flex on Java",
        "isbn": "1933988797",
        "pageCount": 265,
        "publishedDate": {
            "$date": "2010-10-15T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
        "status": "PUBLISH",
        "authors": ["Bernerd Allmon", "Jeremy Anderson"],
        "categories": ["Internet"]
    }, {
        "_id": 9,
        "title": "Griffon in Action",
        "isbn": "1935182234",
        "pageCount": 375,
        "publishedDate": {
            "$date": "2012-06-04T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
        "status": "PUBLISH",
        "authors": ["Andres Almiray", "Danno Ferrin", "", "James Shingler"],
        "categories": ["Java"]
    }, {
        "_id": 10,
        "title": "OSGi in Depth",
        "isbn": "193518217X",
        "pageCount": 325,
        "publishedDate": {
            "$date": "2011-12-12T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
        "status": "PUBLISH",
        "authors": ["Alexandre de Castro Alves"],
        "categories": ["Java"]
    }, {
        "_id": 11,
        "title": "Flexible Rails",
        "isbn": "1933988509",
        "pageCount": 592,
        "publishedDate": {
            "$date": "2008-01-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
        "status": "PUBLISH",
        "authors": ["Peter Armstrong"],
        "categories": ["Web Development"]
    }, {
        "_id": 13,
        "title": "Hello! Flex 4",
        "isbn": "1933988762",
        "pageCount": 258,
        "publishedDate": {
            "$date": "2009-11-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
        "status": "PUBLISH",
        "authors": ["Peter Armstrong"],
        "categories": ["Internet"]
    }, {
        "_id": 14,
        "title": "Coffeehouse",
        "isbn": "1884777384",
        "pageCount": 316,
        "publishedDate": {
            "$date": "1997-07-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
        "status": "PUBLISH",
        "authors": ["Levi Asher", "Christian Crumlish"],
        "categories": ["Miscellaneous"]
    }, {
        "_id": 15,
        "title": "Team Foundation Server 2008 in Action",
        "isbn": "1933988592",
        "pageCount": 344,
        "publishedDate": {
            "$date": "2008-12-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
        "status": "PUBLISH",
        "authors": ["Jamil Azher"],
        "categories": ["Microsoft .NET"]
    }, {
        "_id": 16,
        "title": "Brownfield Application Development in .NET",
        "isbn": "1933988711",
        "pageCount": 550,
        "publishedDate": {
            "$date": "2010-04-16T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
        "status": "PUBLISH",
        "authors": ["Kyle Baley", "Donald Belcham"],
        "categories": ["Microsoft"]
    }, {
        "_id": 17,
        "title": "MongoDB in Action",
        "isbn": "1935182870",
        "pageCount": 0,
        "publishedDate": {
            "$date": "2011-12-12T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
        "status": "PUBLISH",
        "authors": ["Kyle Banker"],
        "categories": ["Next Generation Databases"]
    }, {
        "_id": 18,
        "title": "Distributed Application Development with PowerBuilder 6.0",
        "isbn": "1884777686",
        "pageCount": 504,
        "publishedDate": {
            "$date": "1998-06-01T00:00:00.000-0700"
        },
        "status": "PUBLISH",
        "authors": ["Michael J. Barlotta"],
        "categories": ["PowerBuilder"]
    }, {
        "_id": 19,
        "title": "Jaguar Development with PowerBuilder 7",
        "isbn": "1884777864",
        "pageCount": 550,
        "publishedDate": {
            "$date": "1999-08-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta2.jpg",
        "status": "PUBLISH",
        "authors": ["Michael Barlotta"],
        "categories": ["PowerBuilder", "Client-Server"]
    }, {
        "_id": 20,
        "title": "Taming Jaguar",
        "isbn": "1884777686",
        "pageCount": 362,
        "publishedDate": {
            "$date": "2000-07-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
        "status": "PUBLISH",
        "authors": ["Michael J. Barlotta", "Jason R. Weiss"],
        "categories": ["PowerBuilder"]
    }, {
        "_id": 21,
        "title": "3D User Interfaces with Java 3D",
        "isbn": "1884777902",
        "pageCount": 520,
        "publishedDate": {
            "$date": "2000-08-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg",
        "status": "PUBLISH",
        "authors": ["Jon Barrilleaux"],
        "categories": ["Java", "Computer Graphics"]
    },
     {
        "_id": 22,
        "title": "Hibernate in Action",
        "isbn": "193239415X",
        "pageCount": 400,
        "publishedDate": {
            "$date": "2004-08-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
    },
     {
        "_id": 23,
        "title": "Hibernate in Action (Chinese Edition)",
        "pageCount": 400,
        "publishedDate": {
            "$date": "1999-06-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
    },
     {
        "_id": 24,
        "title": "Java Persistence with Hibernate",
        "isbn": "1932394885",
        "pageCount": 880,
        "publishedDate": {
            "$date": "2006-11-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
        "status": "PUBLISH",
        "authors": ["Christian Bauer", "Gavin King"],
        "categories": ["Java"]
    },
     {
        "_id": 25,
        "title": "JSTL in Action",
        "isbn": "1930110529",
        "pageCount": 480,
        "publishedDate": {
            "$date": "2002-07-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg",
        "status": "PUBLISH",
        "authors": ["Shawn Bayern"],
        "categories": ["Internet"]
    },
    {
        "_id": 26,
        "title": "iBATIS in Action",
        "isbn": "1932394826",
        "pageCount": 384,
        "publishedDate": {
            "$date": "2007-01-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
        "status": "PUBLISH",
        "authors": ["Clinton Begin", "Brandon Goodin", "Larry Meadors"],
        "categories": ["Web Development"]
    }
    
    ]

  return (
<div className=' m-8'>
  <h1 className='text-3xl font-700 text-center'>Featured Books</h1>
  <div className="px-10 my-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-stretch content-center">
    {arr.map((obj) => (
      <div className='flex flex-col justify-evenly items-center flex-wrap border-2 border-gray-100 py-5 px-8 shadow-md h-96 hover:border-black group duration-200 ease-in-out'>
        <img className='w-32 h-40' src={obj.thumbnailUrl} alt="" />
        <div className="self-start">
          <p className='text-red-400 text-xl'>{obj.title}</p>
          <p className='text-gray-400'>{obj.authors}</p>
          <p className='text-xl font-bold'>{obj.categories}</p>
        </div>
        <button className='border-2 text-lg px-7 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-900 shadow-md hidden group-hover:block ease-in-out duration-200'>Read Now</button>
      </div>
    ))}
  </div>
</div>

  )
}

export default FeaturedProducts
