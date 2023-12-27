import CompanyPost from "./CompanyPost"
import { ICompanyPost } from "./MyPosts"

interface IComponentProps {
  posts: ICompanyPost[]
}

const CLIENT_STATUS = 'Client int.';
const OFFERED_STATUS = 'Offered';

const PRE_ALIGNMENT_STATUS = 'Pre-alignment';
const SOURCING_STATUS = 'Sourcing';
const RECRUITER_STATUS = 'Recruiter int.';
const ENDORSED_STATUS = 'Endorsed';
const PENDING_INVOICE_STATUS = 'Pending invoice/ contract';
const PARTIAL_PAYMENT_STATUS = 'Partial Payment';
const STALLED_STATUS = 'Stalled';
const WON_AND_REPLACED_STATUS = 'Won and Replaced';
const WON_STATUS = 'Won';
const LOST_STATUS = 'Lost';
const ALIGNMENT_STATUS = 'Alignment';
const NEVER_WORKED_STATUS = 'Never Worked';   

function CompanyPosts({posts}: IComponentProps) {
  const filterPostsByStatus = (status: string): ICompanyPost[] => {
    return posts.filter((post) => post.Status === status);
  };
  console.log(posts);

  return (
    <div className="w-full flex flex-row gap-x-4">
      {/* List for Client int. status */}
      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Client int.</h2>
          {filterPostsByStatus(CLIENT_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      {/* List for Offered status */}
      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Offered</h2>
          <div>
            {filterPostsByStatus(OFFERED_STATUS).map((post) => (
              <CompanyPost key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Pre-alignment</h2>
          {filterPostsByStatus(PRE_ALIGNMENT_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Sourcing</h2>
          {filterPostsByStatus(SOURCING_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Recruiter int.</h2>
          {filterPostsByStatus(RECRUITER_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Endorsed</h2>
          {filterPostsByStatus(ENDORSED_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Pending invoice/ contract</h2>
          {filterPostsByStatus(PENDING_INVOICE_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Partial Payment</h2>
          {filterPostsByStatus(PARTIAL_PAYMENT_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Stalled</h2>
          {filterPostsByStatus(STALLED_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Won and Replaced</h2>
          {filterPostsByStatus(WON_AND_REPLACED_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Won</h2>
          {filterPostsByStatus(WON_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Lost</h2>
          {filterPostsByStatus(LOST_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Alignment</h2>
          {filterPostsByStatus(ALIGNMENT_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Alignment</h2>
          {filterPostsByStatus(ALIGNMENT_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/5">
        <div className="bg-gray-100 p-3 rounded">
          <h2 className="font-bold mb-2">Never Worked</h2>
          {filterPostsByStatus(NEVER_WORKED_STATUS).map((post) => (
            <CompanyPost key={post._id} post={post} />
          ))}
        </div>
      </div>

    </div>
  );
};


export default CompanyPosts

// return (
//   <div>
//     {posts.map((post) => <CompanyPost post={post} key={`post-${post._id}`}/>)}
//   </div>
// )
// }