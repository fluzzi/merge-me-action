export interface CommitMessageHeadlineGroup {
    groups: {
        commitHeadline: string;
    };
}
export interface GroupName {
    groups: {
        name: string;
    };
}
export declare type ReviewEdges = Array<{
    node: {
        state: 'APPROVED' | 'CHANGES_REQUESTED' | 'COMMENTED' | 'DISMISSED' | 'PENDING';
    };
} | undefined>;
export interface PullRequestInformation {
    mergeableState: MergeableState;
    merged: boolean;
    pullRequestId: string;
    pullRequestState: PullRequestState;
    pullRequestTitle: string;
    reviewEdges: ReviewEdges;
}
export interface Repository {
    repository: {
        pullRequests: {
            nodes: Array<{
                id: string;
                mergeable: MergeableState;
                merged: boolean;
                reviews: {
                    edges: ReviewEdges;
                };
                state: PullRequestState;
                title: string;
            }>;
        };
    };
}
export declare type MergeableState = 'CONFLICTING' | 'MERGEABLE' | 'UNKNOWN';
export declare type PullRequestState = 'CLOSED' | 'MERGED' | 'OPEN';
export declare type MergeStateStatus = 'BEHIND' | 'BLOCKED' | 'CLEAN' | 'DIRTY' | 'DRAFT' | 'HAS_HOOKS' | 'UNKNOWN' | 'UNSTABLE';
