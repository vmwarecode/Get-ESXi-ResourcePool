// VMware vRealize Orchestrator action sample
//
// Get Resource Pool
// 
// For vRO/VRA 7.0+
//
// Action Inputs:
// computeCluster - VC:ClusterComputeResource - Reservation Policy Name
// Selva Jaganathan VMware Inc.
// Return type: VC:ResourcePool - Resource Pool VC Object

var resourcePool=computeCluster.resourcePool;
return resourcePool;