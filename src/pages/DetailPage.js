import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router';
import DetailedSinglePage from '../comoponents/DetailedSinglePage';

function DetailPage() {
  const { id } = useParams();
  const { repos } = useContext(AppContext);
  const repo = repos.find((item) => item.id === +id);

  return (
    <>
      <DetailedSinglePage
        img={repo.owner.avatar_url}
        repoName={repo.name}
        owner={repo.owner.login}
        branch={repo.default_branch}
        description={repo.description}
        forks={repo.forks}
        watchers={repo.watchers}
        visibility={repo.visibility}
        url={repo.owner.html_url}
        date={repo.pushed_at}
      />
    </>
  );
}

export default DetailPage;
