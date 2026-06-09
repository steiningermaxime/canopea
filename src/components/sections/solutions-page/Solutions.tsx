import { solutionBlocks } from '@/data/nos-solutions';
import { SolutionBlock } from './SolutionBlock';

/** Les quatre sections solution alternées (surface / dark). */
export function Solutions() {
  return (
    <>
      {solutionBlocks.map((data) => (
        <SolutionBlock key={data.id} data={data} />
      ))}
    </>
  );
}
