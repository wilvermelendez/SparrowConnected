import Post from '../models/post'
import { connectToDb } from '../startup/db'

export const seedDatabase = async () => {
  try {
    connectToDb()
    const newPost = new Post({
      title: 'est',
      summary:
        'Provident iusto iusto sunt nisi sunt. Repellat quo iste aut. Repellat vero doloremque quae et nam natus dolores in. Sed rerum molestiae doloremque aperiam soluta. Ut distinctio quasi quia libero eveniet quisquam.',
      body: 'Magnam cum facere ratione cum. Quia eius dolorem eos unde accusamus omnis voluptatem natus. Dolorem enim illo pariatur est expedita dolor ut ex qui. Commodi necessitatibus et odio natus maxime iusto ex mollitia.',
      author: 'Hope Wolf',
      publishedUser: {
        name: 'Jordane',
        lastName: 'Paucek',
        _id: '617f3cf29c120f1c0f8bfc4a'
      },
      publicationDate: Date.now(),
      expirationDate: Date.now(),
      lastModifyDate: Date.now(),
      topics: ['new', 'React', 'Other'],
      postType: 'standard',
      headImage: null
    })
    await newPost.save()

    const secondPost = new Post({
      title:
        'Dolor beatae odio ipsa. Tempora molestias provident soluta et voluptatum ipsam omnis voluptatem qui',
      summary:
        '"Incidunt consequuntur illo architecto iure maxime. Eos eaque hic culpa aut. Officiis in odit sed iure dicta voluptatum quam nostrum nihil.',
      body: 'Cumque et et consequuntur quo sunt qui eligendi sit.Cumque et et consequuntur quo sunt qui eligendi sit.Cumque et et consequuntur quo sunt qui eligendi sit.Cumque et et consequuntur quo sunt qui eligendi sit.',
      author: 'Javi Enola',
      publishedUser: {
        name: 'Ola',
        lastName: 'Monahan',
        _id: '617f3f81fde3a163282ba56d'
      },
      publicationDate: Date.now(),
      expirationDate: Date.now(),
      lastModifyDate: Date.now(),
      topics: ['new', 'React', 'Politics'],
      postType: 'compliance',
      headImage: null
    })
    await secondPost.save()
    const thirdPost = new Post({
      title: 'voluptas non dolor',
      summary: 'voluptas non dolor voluptas non dolorvoluptas non dolorvoluptas non dolor',
      body: 'Blanditiis maxime reprehenderit voluptates. Exercitationem rerum modi vero vero sed ipsum consequatur qui. Autem reprehenderit nulla quia aut repellendus. In veniam perferendis officia optio dicta quas rerum odio deserunt. Aut eveniet numquam at ex et enim corrupti non perferendis. Voluptatem sapiente ex dolore.',
      author: 'Jessica Kessler',
      publishedUser: {
        name: 'Anita',
        lastName: 'Swift',
        _id: '617f3ffb90870fd75ae2c4de'
      },
      publicationDate: Date.now(),
      expirationDate: Date.now(),
      lastModifyDate: Date.now(),
      topics: ['new', 'React', 'Politics'],
      postType: 'public',
      headImage: null
    })
    await thirdPost.save()

    console.log('Seed completed')
  } catch (error) {
    console.log(error.message)
  }
}

seedDatabase()
