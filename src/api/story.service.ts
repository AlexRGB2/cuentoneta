// Conexión a Sanity
import { client } from './_helpers/sanity-connector';
import groq from 'groq';

// Utilidades
import { getTweetData } from './_utils/twitter-api';
import { mapAuthor, mapPrologues } from './_utils/functions';

// Modelos
import { StoryDTO } from '@models/story.model';

async function fetchForRead(slug: string): Promise<StoryDTO> {
	{
		const query = groq`*[_type == 'story' && slug.current == '${slug}']
                          {
                              'slug': slug.current,
                              title, 
                              language,
                              originalLink, 
                              videoUrl,
                              badLanguage,
                              forewords, 
                              categories, 
                              body, 
                              review, 
                              forewords, 
                              approximateReadingTime,
                              mediaSources,
                              'author': author-> { ..., nationality-> }
                          }[0]`;
		const story = await client.fetch(query, {});

		const { body, review, author, forewords, mediaSources, ...properties } = story;

		// TODO: #537 - Proveer tipos para tratamiento de contenido multimedia
		const media: any[] = [];
		if (mediaSources) {
			for (const mediaSource of story['mediaSources']) {
				if (mediaSource._type === 'spaceRecording') {
					media.push(await getTweetData(mediaSource));
				}
			}
		}

		return {
			...properties,
			media: media,
			author: mapAuthor(author, properties.language),
			prologues: mapPrologues(forewords),
			paragraphs: body,
			summary: review,
		};
	}
}

export { fetchForRead };
